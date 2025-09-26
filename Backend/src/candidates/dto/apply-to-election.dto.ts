import { IsInt, IsNotEmpty } from 'class-validator';

export class ApplyToElectionDto {
  @IsInt({ message: 'El ID del candidato debe ser un número entero.' })
  @IsNotEmpty({ message: 'El ID del candidato es requerido.' })
  candidateId: number;

  @IsInt({ message: 'El ID de la elección debe ser un número entero.' })
  @IsNotEmpty({ message: 'El ID de la elección es requerido.' })
  electionId: number;
}