import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginCandidateDto {
  @IsEmail()
  @IsNotEmpty()
  correo_candidate: string;

  @IsString()
  @IsNotEmpty()
  contrasena_candidate: string;
}
