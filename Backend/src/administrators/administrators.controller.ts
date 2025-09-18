import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { AdministratorsService } from './administrators.servicie';

@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  // Crear un Administrador
  @Post()
  create(@Body() newAdministrator: CreateAdministratorDto) {
    return this.administratorsService.create(newAdministrator);
  }

  // Obtener todos los administradores
  @Get()
  findAll() {
    return this.administratorsService.findAll();
  }

  // Consultar un administrador por id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administratorsService.findOne(+id);
  }

  // Actualizar un administrador
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministratorDto: UpdateAdministratorDto) {
    return this.administratorsService.update(+id, updateAdministratorDto);
  }

  // Eliminar un administrador
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.administratorsService.remove(+id);
  }
}