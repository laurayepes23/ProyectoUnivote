// src/candidates/candidates.service.ts
import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { LoginCandidateDto } from './dto/login-candidate.dto';
import * as bcrypt from 'bcrypt';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    const candidates = await this.prisma.candidate.findMany({
      include: {
        election: { select: { nombre_election: true } },
        proposals: { select: { descripcion_proposal: true } },
      },
    });
    return candidates.map(candidate => ({
      ...candidate,
      num_doc_candidate: candidate.num_doc_candidate.toString(),
    }));
  }

  // --- NUEVO MÉTODO PARA BUSCAR UN CANDIDATO CON SUS PROPUESTAS ---
  async findOneWithProposals(id: number) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { id_candidate: id },
      include: {
        proposals: true, // Incluimos todas las propuestas
      },
    });

    if (!candidate) {
      throw new NotFoundException(`Candidato con ID ${id} no encontrado.`);
    }

    // Excluimos la contraseña por seguridad
    const { contrasena_candidate, ...result } = candidate;
    return result;
  }
  // --- FIN DEL MÉTODO NUEVO ---

  async update(id: number, updateCandidateDto: UpdateCandidateDto) {
    try {
      const updatedCandidate = await this.prisma.candidate.update({
        where: { id_candidate: id },
        data: updateCandidateDto,
      });
      const { contrasena_candidate, ...result } = updatedCandidate;
      return result;
    } catch (error) {
      throw new NotFoundException(`Candidato con ID ${id} no encontrado.`);
    }
  }

  async create(createCandidateDto: CreateCandidateDto, foto_candidate?: Express.Multer.File) {
    try {
      const numDocBigInt = BigInt(createCandidateDto.num_doc_candidate);
      const existingCandidate = await this.prisma.candidate.findFirst({
        where: {
          OR: [
            { correo_candidate: createCandidateDto.correo_candidate },
            { num_doc_candidate: numDocBigInt },
          ],
        },
      });
      if (existingCandidate) {
        if (existingCandidate.correo_candidate === createCandidateDto.correo_candidate) {
          throw new ConflictException('El correo electrónico ya está registrado.');
        }
        if (existingCandidate.num_doc_candidate.toString() === numDocBigInt.toString()) {
          throw new ConflictException('El número de documento ya está registrado.');
        }
      }
      const hashedPassword = await bcrypt.hash(createCandidateDto.contrasena_candidate, 10);
      const dataToCreate = {
        nombre_candidate: createCandidateDto.nombre_candidate,
        apellido_candidate: createCandidateDto.apellido_candidate,
        tipo_doc_candidate: createCandidateDto.tipo_doc_candidate,
        correo_candidate: createCandidateDto.correo_candidate,
        contrasena_candidate: hashedPassword,
        estado_candidate: createCandidateDto.estado_candidate || 'Pendiente',
        num_doc_candidate: numDocBigInt,
        role: { connect: { id_role: createCandidateDto.id_role } },
        career: { connect: { id_career: createCandidateDto.id_career } },
        foto_candidate: foto_candidate ? `http://localhost:3000/${foto_candidate.path}` : null,
        ...(createCandidateDto.id_election && {
          election: { connect: { id_election: createCandidateDto.id_election } },
        }),
      };
      const createdCandidate = await this.prisma.candidate.create({ data: dataToCreate });
      const { contrasena_candidate, ...result } = createdCandidate;
      return result;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      console.error('Error detallado:', error);
      throw new BadRequestException('Hubo un error al crear el candidato. Revisa los datos proporcionados.');
    }
  }

  async login(loginCandidateDto: LoginCandidateDto) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { correo_candidate: loginCandidateDto.correo_candidate },
    });
   
    if (!candidate) {
      
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const passwordMatch = await bcrypt.compare(
      loginCandidateDto.contrasena_candidate,
      candidate.contrasena_candidate,
    );
    if (!passwordMatch) {
       console.log(candidate)
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const { contrasena_candidate, ...result } = candidate;
    return result;
  }
}