// src/careers/careers.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Injectable()
export class CareersService {
  constructor(private prisma: PrismaService) {}

  async create(createCareerDto: CreateCareerDto) {
    return this.prisma.career.create({
      data: createCareerDto,
      include: {
        voters: true // Incluir votantes relacionados
      }
    });
  }

  async findAll() {
    return this.prisma.career.findMany({
      include: {
        voters: true
      }
    });
  }

  async findOne(id: number) {
    const career = await this.prisma.career.findUnique({
      where: { id_career: id },
      include: {
        voters: true
      }
    });

    if (!career) {
      throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
    }

    return career;
  }

  async update(id: number, updateCareerDto: UpdateCareerDto) {
    try {
      return await this.prisma.career.update({
        where: { id_career: id },
        data: updateCareerDto,
        include: {
          voters: true
        }
      });
    } catch (error) {
      throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.career.delete({
        where: { id_career: id }
      });
    } catch (error) {
      throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
    }
  }
}