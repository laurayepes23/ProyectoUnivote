// src/voters/voters.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { VotersService } from './voters.service';
import { CreateVoterDto } from './dto/create-voter.dto';
import { UpdateVoterDto } from './dto/update-voter.dto';
import { LoginVoterDto } from './dto/login-voter.dto';

@Controller('voters')
export class VotersController {
    constructor(private readonly votersService: VotersService) { }

    //Crear un votante
    @Post()
    create(@Body() createVoterDto: CreateVoterDto) {
        return this.votersService.create(createVoterDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginVoterDto: LoginVoterDto) {
        const voter = await this.votersService.login(loginVoterDto.correo_voter, loginVoterDto.contrasena_voter);
        return {
            message: 'Inicio de sesión exitoso',
            voter: voter
        };
    }

    //Consultar todos los votantes
    @Get()
    findAll() {
        return this.votersService.findAll();
    }

    //Consultar votante por ID
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.votersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateVoterDto: UpdateVoterDto) {
        return this.votersService.update(+id, updateVoterDto);
    }

    //Borrar el votante por ID
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.votersService.remove(+id);
    }
}