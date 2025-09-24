import { IsString, IsInt, IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateVoterDto {
    @IsNotEmpty({ message: 'El nombre es requerido' })
    @IsString({ message: 'El nombre debe ser texto' })
    nombre_voter: string;

    @IsNotEmpty()
    @IsString()
    apellido_voter: string;

    @IsNotEmpty()
    @IsString()
    tipo_doc_voter: string;

    @IsNotEmpty()
    @IsNumber()
    num_doc_voter: number;

    @IsNotEmpty()
    @IsEmail()
    correo_voter: string;

    @IsNotEmpty()
    @IsString()
    estado_voter: string;

    @IsNotEmpty()
    @IsString()
    contrasena_voter: string;

    @IsNotEmpty()
    @IsInt()
    id_role: number;

    @IsOptional()
    @IsInt()
    id_election?: number;

    @IsNotEmpty()
    @IsInt()
    id_career: number;
}
