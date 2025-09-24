import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';

@Injectable()
export class ElectionsService {
  constructor(private prisma: PrismaService) { }

  // --- MÉTODO DE RESULTADOS ---
  async getResults() {
    const elections = await this.prisma.election.findMany({
      include: {
        candidates: true,
      },
    });

    const results = await Promise.all(
      elections.map(async (election) => {
        const candidatesWithVotes = await Promise.all(
          election.candidates.map(async (candidate) => {
            // Conteo los votos para cada candidato
            const voteCount = await this.prisma.vote.count({
              where: {
                candidateId: candidate.id_candidate,
              },
            });
            return { ...candidate, votos: voteCount };
          }),
        );
        return { ...election, candidates: candidatesWithVotes };
      }),
    );

    return results;
  }

  async create(createElectionDto: CreateElectionDto) {
    return this.prisma.election.create({
      data: createElectionDto,
      include: {
        administrador: true,
        candidates: true,
        voters: true,
        result: true
      }
    });
  }

  async findAll() {
    const elections = await this.prisma.election.findMany({
      include: {
        administrador: true,
        candidates: true,
        voters: true,
        result: true
      }
    });

    return elections.map(election => ({
      ...election,
      fecha_inicio: election.fecha_inicio.toLocaleDateString('es-ES', { timeZone: 'UTC' }),
      fecha_fin: election.fecha_fin.toLocaleDateString('es-ES', { timeZone: 'UTC' }),
    }));
  }

  async findOne(id: number) {
    const election = await this.prisma.election.findUnique({
      where: { id_election: id },
      include: {
        administrador: true,
        candidates: {
          include: {
            proposals: true,
          },
        },
        voters: true,
        result: true
      }
    });

    if (election) {
      return {
        ...election,
        fecha_inicio: election.fecha_inicio.toLocaleDateString('es-ES', { timeZone: 'UTC' }),
        fecha_fin: election.fecha_fin.toLocaleDateString('es-ES', { timeZone: 'UTC' }),
      };
    }

    return null;
  }

  async update(id: number, updateElectionDto: UpdateElectionDto) {
    return this.prisma.election.update({
      where: { id_election: id },
      data: updateElectionDto,
      include: {
        administrador: true,
        candidates: true,
        voters: true,
        result: true
      }
    });
  }

  async remove(id: number) {
    return this.prisma.election.delete({
      where: { id_election: id }
    });
  }

  async updateStatus(id: number, status: string) {
    return this.prisma.election.update({
      where: { id_election: id },
      data: { estado_election: status }
    });
  }
}