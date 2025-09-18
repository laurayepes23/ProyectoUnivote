// src/votes/dto/create-vote.dto.ts
export class CreateVoteDto {
    fecha_vote: Date;
    hora_vote: Date;
    voterId: number;        // ID del votante que emite el voto
    candidateId: number;    // ID del candidato votado
}