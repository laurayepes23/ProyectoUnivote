// src/votes/votes.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VotesService {
    constructor(private prisma: PrismaService) { }

    async createVote(createVoteDto: CreateVoteDto) {
        // Verificar que el votante existe
        const voter = await this.prisma.voter.findUnique({
            where: { id_voter: createVoteDto.voterId }
        });

        if (!voter) {
            throw new Error('Votante no encontrado');
        }

        // Verificar que el candidato existe
        const candidate = await this.prisma.candidate.findUnique({
            where: { id_candidate: createVoteDto.candidateId }
        });

        if (!candidate) {
            throw new Error('Candidato no encontrado');
        }

        // Verificar que el votante no haya votado antes
        const existingVote = await this.prisma.vote.findUnique({
            where: { voterId: createVoteDto.voterId }
        });

        if (existingVote) {
            throw new Error('Este votante ya emitió su voto');
        }

        // Crear el voto
        return this.prisma.vote.create({
            data: {
                fecha_vote: createVoteDto.fecha_vote,
                hora_vote: createVoteDto.hora_vote,
                voterId: createVoteDto.voterId,
                candidateId: createVoteDto.candidateId
            },
            include: {
                voter: true,     // Incluir datos del votante
                candidate: true  // Incluir datos del candidato
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