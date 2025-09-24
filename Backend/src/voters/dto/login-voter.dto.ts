// src/voters/dto/login-voter.dto.ts

import { IsEmail, IsString } from 'class-validator';

export class LoginVoterDto {
    @IsEmail()
    correo_voter: string;

    @IsString()
    contrasena_voter: string;
}