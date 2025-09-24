import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVoterDto } from './dto/create-voter.dto';
import { UpdateVoterDto } from './dto/update-voter.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class VotersService {
    constructor(private prisma: PrismaService) { }

    async create(createVoterDto: CreateVoterDto) {
        try {
            const hashedPassword = await bcrypt.hash(createVoterDto.contrasena_voter, 10);

            // Verifica que el correo o el número de documento no existan ya.
            const existingVoter = await this.prisma.voter.findFirst({
                where: {
                    OR: [
                        { correo_voter: createVoterDto.correo_voter },
                        { num_doc_voter: BigInt(createVoterDto.num_doc_voter) },
                    ],
                },
            });

            if (existingVoter) {
                if (existingVoter.correo_voter === createVoterDto.correo_voter) {
                    throw new ConflictException('El correo electrónico ya está registrado.');
                }
                if (existingVoter.num_doc_voter === BigInt(createVoterDto.num_doc_voter)) {
                    throw new ConflictException('El número de documento ya está registrado.');
                }
            }

            // Valida que el rol y la carrera existan antes de la creación
            await this.validateRelations(createVoterDto);

            // Extraemos los IDs de relación del DTO para usar la sintaxis de "connect" de Prisma
            const { id_role, id_career, id_election, ...voterData } = createVoterDto;

            // Prepara los datos para la creación, usando la sintaxis de "connect" para las relaciones
            const dataToCreate: any = {
                ...voterData,
                contrasena_voter: hashedPassword,
                num_doc_voter: BigInt(voterData.num_doc_voter),
                role: {
                    connect: { id_role: id_role }
                },
                career: {
                    connect: { id_career: id_career }
                }
            };

            // Si el DTO incluye un id de elección, lo agregamos a la conexión
            if (id_election) {
                dataToCreate.election = { connect: { id_election: id_election } };
            }

            return await this.prisma.voter.create({
                data: dataToCreate,
                include: {
                    role: true,
                    election: true,
                    career: true,
                    vote: true
                }
            });

        } catch (error) {
            console.error('Error en VotersService.create:', error);
            throw error;
        }
    }

    async login(correo: string, contrasena: string) {
        const voter = await this.prisma.voter.findUnique({
            where: { correo_voter: correo },
        });

        if (!voter) {
            throw new NotFoundException('Correo o contraseña incorrectos.');
        }

        const isMatch = await bcrypt.compare(contrasena, voter.contrasena_voter);

        if (!isMatch) {
            throw new NotFoundException('Correo o contraseña incorrectos.');
        }

        const { contrasena_voter, ...result } = voter;
        return result;
    }

    async findAll() {
        const voters = await this.prisma.voter.findMany({
            include: {
                role: true,
                election: true,
                career: true,
                vote: true
            },
            orderBy: { id_voter: 'asc' }
        });

        if (voters.length === 0) {
            throw new HttpException(
                'No hay votantes registrados',
                HttpStatus.NOT_FOUND
            );
        } else {
            return voters;
        }
    }

    async findOne(id: number) {
        const voter = await this.prisma.voter.findUnique({
            where: { id_voter: id },
            include: {
                role: true,
                election: true,
                career: true,
                vote: true
            }
        });

        if (!voter) {
            throw new NotFoundException(`Votante con ID ${id} no encontrado`);
        }

        return voter;
    }

    async update(id: number, updateVoterDto: UpdateVoterDto) {
        try {
            const data: any = { ...updateVoterDto };

            if (updateVoterDto.num_doc_voter) {
                data.num_doc_voter = BigInt(updateVoterDto.num_doc_voter);
            }

            // Si se incluye una nueva contraseña, la hashea
            if (updateVoterDto.contrasena_voter) {
                data.contrasena_voter = await bcrypt.hash(updateVoterDto.contrasena_voter, 10);
            }

            return await this.prisma.voter.update({
                where: { id_voter: id },
                data,
                include: {
                    role: true,
                    election: true,
                    career: true,
                    vote: true
                }
            });
        } catch (error) {
            if (error.code === 'P2002') {
                const target = error.meta?.target;
                if (target.includes('correo_voter')) {
                    throw new ConflictException('El correo electrónico ya está registrado.');
                }
                if (target.includes('num_doc_voter')) {
                    throw new ConflictException('El número de documento ya está registrado.');
                }
            }
            throw new NotFoundException(`Votante con ID ${id} no encontrado.`);
        }
    }

async remove(id: number) {
    try {
        // Primero verificar si existe
        const voter = await this.prisma.voter.findUnique({
            where: { id_voter: id }
        });

        if (!voter) {
            throw new NotFoundException(`Votante con ID ${id} no encontrado.`);
        }

        // Luego eliminar
        return await this.prisma.voter.delete({
            where: { id_voter: id }
        });

    } catch (error) {
        if (error instanceof NotFoundException) {
            throw error;
        }
        
        // Manejar otros errores de Prisma
        if (error.code === 'P2025') {
            throw new NotFoundException(`Votante con ID ${id} no encontrado.`);
        }
        
        // Si hay relaciones (foreign key constraints)
        if (error.code === 'P2003') {
            throw new ConflictException('No se puede eliminar el votante porque tiene votos asociados.');
        }

        throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

    private async validateRelations(createVoterDto: CreateVoterDto) {
        const [role, career] = await Promise.all([
            this.prisma.role.findUnique({ where: { id_role: createVoterDto.id_role } }),
            this.prisma.career.findUnique({ where: { id_career: createVoterDto.id_career } })
        ]);

        if (!role) {
            throw new NotFoundException('Rol no encontrado.');
        }
        if (!career) {
            throw new NotFoundException('Carrera no encontrada.');
        }
    }
}
