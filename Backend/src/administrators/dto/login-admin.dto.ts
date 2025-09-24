import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAdminDto {
    @IsEmail()
    @IsNotEmpty()
    correo_admin: string;

    @IsString()
    @IsNotEmpty()
    contrasena_admin: string;
}
