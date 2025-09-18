// src/results/results.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';

@Injectable()
export class ResultsService {
  constructor(private prisma: PrismaService) {}

  async create(createResultDto: CreateResultDto) {
    // Verificar que la elección existe
    const election = await this.prisma.election.findUnique({
      where: { id_election: createResultDto.electionId }
    });

    if (!election) {
      throw new NotFoundException('Elección no encontrada');
    }

    // Verificar que el candidato existe
    const candidate = await this.prisma.candidate.findUnique({
      where: { id_candidate: createResultDto.candidateId }
    });

    if (!candidate) {
      throw new NotFoundException('Candidato no encontrado');
    }

    // Verificar que el candidato pertenece a la elección
    if (candidate.electionId !== createResultDto.electionId) {
      throw new ConflictException('El candidato no pertenece a esta elección');
    }

    return this.prisma.result.create({
      data: createResultDto,
      include: {
        election: true,
        candidate: true
      }
    });
  }

  async findAll() {
    return this.prisma.result.findMany({
      include: {
        election: true,
        candidate: true
      }
    });
  }

  async findOne(id: number) {
    const result = await this.prisma.result.findUnique({
      where: { id_result: id },
      include: {
        election: true,
        candidate: true
      }
    });

    if (!result) {
      throw new NotFoundException(`Resultado con ID ${id} no encontrado`);
    }

    return result;
  }

  async update(id: number, updateResultDto: UpdateResultDto) {
    try {
      return await this.prisma.result.update({
        where: { id_result: id },
        data: updateResultDto,
        include: {
          election: true,
          candidate: true
        }
      });
    } catch (error) {
      throw new NotFoundException(`Resultado con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.result.delete({
        where: { id_result: id }
      });
      
      return {
        success: true,
        message: `Resultado con ID ${id} eliminado correctamente`
      };
    } catch (error) {
      throw new NotFoundException(`Resultado con ID ${id} no encontrado`);
    }
  }
}