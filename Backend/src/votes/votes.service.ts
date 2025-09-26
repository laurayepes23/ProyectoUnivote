// src/votes/votes.service.ts
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VotesService {
    constructor(private prisma: PrismaService) { }

    async createVote(createVoteDto: CreateVoteDto) {
        const { voterId, candidateId, electionId } = createVoteDto;

        // Verificar que el votante existe
        const voter = await this.prisma.voter.findUnique({ where: { id_voter: voterId } });
        if (!voter) {
            throw new NotFoundException('Votante no encontrado');
        }

        // Verificar que el candidato existe y pertenece a la elección correcta
        const candidate = await this.prisma.candidate.findFirst({
            where: {
                id_candidate: candidateId,
                // CORRECCIÓN AQUÍ: Usar la relación 'election' para filtrar
                election: {
                    id_election: electionId
                }
            }
        });
        if (!candidate) {
            throw new NotFoundException('Candidato no encontrado o no pertenece a esta elección');
        }

        // Verificar si el votante ya ha votado en esta elección
        const existingVote = await this.prisma.vote.findFirst({
            where: {
                voterId: voterId,
                candidate: {
                    election: {
                        id_election: electionId
                    }
                }
            }
        });

        if (existingVote) {
            throw new ConflictException('Este votante ya emitió su voto en esta elección.');
        }

        // Crear el voto
        return this.prisma.vote.create({
            data: {
                fecha_vote: new Date(), // Generado en el servidor
                hora_vote: new Date(),  // Generado en el servidor
                voter: { connect: { id_voter: voterId } },
                candidate: { connect: { id_candidate: candidateId } },
                election: { connect: { id_election: electionId } }

            },
            include: {
                voter: true,
                candidate: true
            }
        });
    }

    async getVotes() {
        return this.prisma.vote.findMany({
            include: {
                voter: true,
                candidate: true
            }
        });
    }
}