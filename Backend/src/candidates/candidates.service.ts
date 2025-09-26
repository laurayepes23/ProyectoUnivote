// src/candidates/candidates.service.ts
import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { LoginCandidateDto } from './dto/login-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { ApplyToElectionDto } from './dto/apply-to-election.dto';

@Injectable()
export class CandidatesService {
  constructor(private prisma: PrismaService) {}

  async applyToElection(applyToElectionDto: ApplyToElectionDto) {
    // ... (el resto de este método está bien)
    const { candidateId, electionId } = applyToElectionDto;

    const candidate = await this.prisma.candidate.findUnique({
      where: { id_candidate: candidateId },
    });

    if (!candidate) {
      throw new NotFoundException(`El candidato con ID ${candidateId} no fue encontrado.`);
    }

    if (candidate.electionId) {
      throw new ConflictException('Ya estás postulado a una elección. No puedes postularte a más de una.');
    }

    const election = await this.prisma.election.findUnique({
      where: { id_election: electionId },
    });

    if (!election) {
      throw new NotFoundException(`La elección con ID ${electionId} no fue encontrada.`);
    }

    try {
      const updatedCandidate = await this.prisma.candidate.update({
        where: { id_candidate: candidateId },
        data: {
          election: { connect: { id_election: electionId } },
          estado_candidate: 'Pendiente', 
        },
      });
      
      const { contrasena_candidate, ...result } = updatedCandidate;
      return result;

    } catch (error) {
      throw new BadRequestException('No se pudo completar la postulación.');
    }
  }

  async findAll() {
    const candidates = await this.prisma.candidate.findMany({
      include: {
        election: { select: { nombre_election: true } },
        proposals: { select: { descripcion_proposal: true } },
      },
    });
    return candidates.map(c => ({ ...c, num_doc_candidate: c.num_doc_candidate.toString() }));
  }

  async findOneWithProposals(id: number) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { id_candidate: id },
      include: { proposals: true },
    });

    if (!candidate) {
      throw new NotFoundException(`Candidato con ID ${id} no encontrado.`);
    }

    const { contrasena_candidate, ...result } = candidate;
    return result;
  }

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

  // --- MÉTODO CREATE CORREGIDO ---
  async create(createCandidateDto: CreateCandidateDto, foto_candidate?: Express.Multer.File) {
    const numDocBigInt = BigInt(createCandidateDto.num_doc_candidate);
    const existing = await this.prisma.candidate.findFirst({
      where: { OR: [{ correo_candidate: createCandidateDto.correo_candidate }, { num_doc_candidate: numDocBigInt }] },
    });
    if (existing) {
      throw new ConflictException('El correo o número de documento ya está registrado.');
    }

    const hashedPassword = await bcrypt.hash(createCandidateDto.contrasena_candidate, 10);
    
    const dataToCreate = {
      nombre_candidate: createCandidateDto.nombre_candidate,
      apellido_candidate: createCandidateDto.apellido_candidate,
      tipo_doc_candidate: createCandidateDto.tipo_doc_candidate,
      num_doc_candidate: numDocBigInt,
      correo_candidate: createCandidateDto.correo_candidate,
      contrasena_candidate: hashedPassword,
      estado_candidate: 'Inactivo',
      foto_candidate: foto_candidate ? `http://localhost:3000/${foto_candidate.path}` : null,
      role: {
        connect: { id_role: createCandidateDto.id_role }
      },
      career: {
        connect: { id_career: createCandidateDto.id_career }
      }
    };

    const candidate = await this.prisma.candidate.create({
      data: dataToCreate,
    });

    const { contrasena_candidate, ...result } = candidate;
    return result;
  }

  async login(loginCandidateDto: LoginCandidateDto) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { correo_candidate: loginCandidateDto.correo_candidate },
    });
    
    if (!candidate || !(await bcrypt.compare(loginCandidateDto.contrasena_candidate, candidate.contrasena_candidate))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const { contrasena_candidate, ...result } = candidate;
    return result;
  }
}