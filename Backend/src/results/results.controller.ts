// src/results/results.controller.ts

import { Controller, Get } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get()
  findAll() {
    // Ahora esta llamada funciona porque el método ya está implementado en el servicio
    return this.resultsService.findElectionResults();
  }
}