// src/elections/dto/create-election.dto.ts
export class CreateElectionDto {
    nombre_election: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado_election: string;
    admin_id: number;
}