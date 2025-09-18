// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()  // ← Sin prefijo, o usa otro diferente
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('saludo')  // ← Mapea a /saludo en lugar de /candidates
  getSaludo(): string {
    const nombre: string = "Manuela Marroquin";
    return `Este es el Response para: ${nombre}`;
  }
}