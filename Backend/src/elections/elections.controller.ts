import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { ElectionsService } from './elections.service';
import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';

@Controller('elections')
export class ElectionsController {
  constructor(private readonly electionsService: ElectionsService) {}
  
  // --- NUEVO ENDPOINT PARA LOS RESULTADOS ---
  @Get('results')
  getResults() {
    return this.electionsService.getResults();
  }


  @Post()
  create(@Body() createElectionDto: CreateElectionDto) {
    return this.electionsService.create(createElectionDto);
  }

  @Get()
  findAll() {
    return this.electionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.electionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElectionDto: UpdateElectionDto) {
    return this.electionsService.update(+id, updateElectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.electionsService.remove(+id);
  }
  
  // Nuevo endpoint para iniciar una elección
  @Put('iniciar/:id')
  iniciar(@Param('id') id: string) {
    return this.electionsService.updateStatus(+id, 'Activa');
  }

  // Nuevo endpoint para cerrar una elección
  @Put('cerrar/:id')
  cerrar(@Param('id') id: string) {
    return this.electionsService.updateStatus(+id, 'Finalizada');
  }
}