import { IsNotEmpty, IsString, IsEmail, IsOptional, IsNumber, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCandidateDto {
  @IsString()
  @IsNotEmpty()
  nombre_candidate: string;

  @IsString()
  @IsNotEmpty()
  apellido_candidate: string;

  @IsString()
  @IsNotEmpty()
  tipo_doc_candidate: string;

  @Transform(({ value }) => parseInt(value, 10))
  @IsNotEmpty()
  @IsInt() 
  num_doc_candidate: number;

  @IsEmail()
  @IsNotEmpty()
  correo_candidate: string;

  @IsString()
  @IsNotEmpty()
  contrasena_candidate: string;

  @Transform(({ value }) => parseInt(value, 10))
  @IsNotEmpty()
  @IsInt()
  id_role: number;

  @Transform(({ value }) => parseInt(value, 10))
  @IsNotEmpty()
  @IsInt()
  id_career: number;

  @IsOptional()
  @IsString()
  estado_candidate?: string;

  @IsOptional()
  @IsString()
  foto_candidate?: string;

  @Transform(({ value }) => (value ? parseInt(value, 10) : undefined))
  @IsOptional()
  @IsInt()
  id_election?: number;
}