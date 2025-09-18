// src/voters/voters.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVoterDto } from './dto/create-voter.dto';
import { UpdateVoterDto } from './dto/update-voter.dto';

@Injectable()
export class VotersService {
    constructor(private prisma: PrismaService) { }

    async create(createVoterDto: CreateVoterDto) {
        try {
            // Verificar que las relaciones existan
            await this.validateRelations(createVoterDto);

            return await this.prisma.voter.create({
                data: {
                    ...createVoterDto,
                    num_doc_voter: BigInt(createVoterDto.num_doc_voter),
                },
                include: {
                    role: true,
                    election: true,
                    career: true,
                    vote: true
                }
            });

        } catch (error) {
            // Manejar errores de unicidad de Prisma
            if (error.code === 'P2002') {
                const target = error.meta?.target;
                if (target.includes('correo_voter')) {
                    throw new ConflictException('El correo electrónico ya está registrado');
                }
                if (target.includes('num_doc_voter')) {
                    throw new ConflictException('El número de documento ya está registrado');
                }
            }
            throw error;
        }
    }

    // ... los demás métodos permanecen igual
    async findAll() {
        return this.prisma.voter.findMany({
            include: {
                role: true,
                election: true,
                career: true,
                vote: true
            }
        });
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
                    throw new ConflictException('El correo electrónico ya está registrado');
                }
                if (target.includes('num_doc_voter')) {
                    throw new ConflictException('El número de documento ya está registrado');
                }
            }
            throw new NotFoundException(`Votante con ID ${id} no encontrado`);
        }
    }

    async remove(id: number) {
        try {
            return await this.prisma.voter.delete({
                where: { id_voter: id }
            });
        } catch (error) {
            throw new NotFoundException(`Votante con ID ${id} no encontrado`);
        }
    }

    private async validateRelations(createVoterDto: CreateVoterDto) {
        const [role, election, career] = await Promise.all([
            this.prisma.role.findUnique({ where: { id_role: createVoterDto.roleId } }),
            this.prisma.election.findUnique({ where: { id_election: createVoterDto.electionId } }),
            this.prisma.career.findUnique({ where: { id_career: createVoterDto.careerId } })
        ]);

        if (!role) throw new NotFoundException('Rol no encontrado');
        if (!election) throw new NotFoundException('Elección no encontrada');
        if (!career) throw new NotFoundException('Carrera no encontrada');
    }
}