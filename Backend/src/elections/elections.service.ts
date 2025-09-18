// src/elections/elections.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateElectionDto } from './dto/create-election.dto';
import { UpdateElectionDto } from './dto/update-election.dto';

@Injectable()
export class ElectionsService {
  constructor(private prisma: PrismaService) {}

  async create(createElectionDto: CreateElectionDto) {
    return this.prisma.election.create({
      data: createElectionDto,
      include: {
        administrador: true,
        candidates: true,
        voters: true,
        result: true
      }
    });
  }

  async findAll() {
    return this.prisma.election.findMany({
      include: {
        administrador: true,
        candidates: true,
        voters: true,
        result: true
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.election.findUnique({
      where: { id_election: id },
      include: {
        administrador: true,
        candidates: true,
        voters: true,
        result: true
      }
    });
  }

  async update(id: number, updateElectionDto: UpdateElectionDto) {
    return this.prisma.election.update({
      where: { id_election: id },
      data: updateElectionDto,
      include: {
        administrador: true,
        candidates: true,
        voters: true,
        result: true
      }
    });
  }

  async remove(id: number) {
    return this.prisma.election.delete({
      where: { id_election: id }
    });
  }
}