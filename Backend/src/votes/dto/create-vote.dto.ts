import { IsNotEmpty } from "class-validator";

// src/votes/dto/create-vote.dto.ts
export class CreateVoteDto {


    @IsNotEmpty()
    voterId: number;

    @IsNotEmpty()
    candidateId: number;

    @IsNotEmpty()
    electionId: number; // NUEVO: Para identificar la elección
}