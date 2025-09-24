// src/results/results.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResultsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Este método calcula los resultados de todas las elecciones en tiempo real.
   * Busca cada elección y, para cada candidato, cuenta las entradas
   * relacionadas en la tabla 'Vote' usando la función _count de Prisma.
   */
  async findElectionResults() {
    const electionsWithResults = await this.prisma.election.findMany({
      // Seleccionamos solo los campos que necesitamos para ser eficientes
      select: {
        id_election: true,
        nombre_election: true,
        // Incluimos los candidatos de cada elección
        candidates: {
          orderBy: {
            nombre_candidate: 'asc', // Ordenar candidatos alfabéticamente
          },
          select: {
            id_candidate: true,
            nombre_candidate: true,
            apellido_candidate: true,
            _count: {
              select: {
                votes: true, // Esto contará las entradas en el modelo 'Vote' para este candidato
              },
            },
          },
        },
      },
      // Ordenar para mostrar las elecciones más recientes primero
      orderBy: {
        fecha_inicio: 'desc',
      },
    });

    return electionsWithResults;
  }
}