// src/elections/dto/create-election.dto.ts
import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateElectionDto {
    @IsString()
    @IsNotEmpty()
    nombre_election: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha_inicio: Date;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fecha_fin: Date;

    @IsString()
    @IsNotEmpty()
    estado_election: string;

    @IsNumber()
    @IsNotEmpty()
    id_admin: number;
}
