import { IsString, IsOptional, IsIn } from 'class-validator';

export class UpdateCandidateDto {
  @IsString()
  @IsOptional()
  @IsIn(['Aprobado', 'No Aprobado', 'Pendiente']) // Solo permite estos valores
  estado_candidate?: string;

  // Si en el futuro quieres actualizar otros campos, los puedes añadir aquí.
  // @IsString()
  // @IsOptional()
  // nombre_candidate?: string;
}