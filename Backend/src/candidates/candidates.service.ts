import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CandidatesService {
  constructor(private repositorio: PrismaService) { }

  async create(createCandidateDto: CreateCandidateDto): Promise<any> {
    // Verificar si el email ya existe
    const existingCandidate = await this.repositorio.candidate.findFirst({
      where: { correo_candidate: createCandidateDto.correo_candidate }
    });

    if (existingCandidate) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    // Verificar si el número de documento ya existe
    const existingDoc = await this.repositorio.candidate.findFirst({
      where: { num_doc_candidate: BigInt(createCandidateDto.num_doc_candidate || 0) }
    });

    if (existingDoc) {
      throw new ConflictException('El número de documento ya está registrado');
    }

    // Verificar que la elección existe
    const electionExists = await this.repositorio.election.findUnique({
      where: { id_election: createCandidateDto.electionId }
    });

    if (!electionExists) {
      throw new NotFoundException('Elección no encontrada');
    }

    return this.repositorio.candidate.create({
      data: {
        nombre_candidate: createCandidateDto.nombre_candidate,
        apellido_candidate: createCandidateDto.apellido_candidate || '',
        tipo_doc_candidate: createCandidateDto.tipo_doc_candidate || '',
        num_doc_candidate: BigInt(createCandidateDto.num_doc_candidate || 0),
        correo_candidate: createCandidateDto.correo_candidate || '',
        estado_candidate: createCandidateDto.estado_candidate || 'activo',
        foto_candidate: createCandidateDto.foto_candidate || 'default.jpg',
        electionId: createCandidateDto.electionId
      },
      include: {
        election: true,
        proposals: true,
        votes: true,
        result: true
      }
    });
  }

  async findAll(): Promise<any> {
    return this.repositorio.candidate.findMany({
      include: {
        election: true,
        proposals: true,
        votes: true,
        result: true
      }
    });
  }

  async findOne(id: number) {
    const candidate = await this.repositorio.candidate.findUnique({
      where: { id_candidate: id },
      include: {
        election: true,
        proposals: true,
        votes: true,
        result: true
      }
    });

    if (!candidate) {
      throw new NotFoundException(`Candidato con ID ${id} no encontrado`);
    }

    return candidate;
  }

  async update(id: number, updateCandidateDto: UpdateCandidateDto) {
    try {
      const data: any = { ...updateCandidateDto };

      // Convertir num_doc_candidate a BigInt si está presente
      if (updateCandidateDto.num_doc_candidate !== undefined) {
        data.num_doc_candidate = BigInt(updateCandidateDto.num_doc_candidate);
      }

      return await this.repositorio.candidate.update({
        where: { id_candidate: id },
        data: data,
        include: {
          election: true,
          proposals: true,
          votes: true,
          result: true
        }
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Candidato con ID ${id} no encontrado`);
      }
      throw error;
    }
  }

  async remove(id: number): Promise<any> {
    try {
      await this.repositorio.candidate.delete({
        where: { id_candidate: id },
      });
      
      return {
        status: 'success',
        message: `Candidato con ID ${id} eliminado correctamente`,
        id_candidate: id
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Candidato con ID ${id} no encontrado`);
      }
      throw error;
    }
  }
}