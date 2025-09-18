// src/voters/dto/create-voter.dto.ts
export class CreateVoterDto {
    nombre_voter: string;
    apellido_voter: string;
    tipo_doc_voter: string;
    num_doc_voter: bigint | number;
    correo_voter: string;
    estado_voter: string;
    contrasena_voter: string;
    roleId: number;        // Relación obligatoria
    electionId: number;    // Relación obligatoria
    careerId: number;      // Relación obligatoria
}