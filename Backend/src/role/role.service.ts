// src/roles/role.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.prisma.role.create({
      data: createRoleDto,
      include: {
        voters: true // Incluir votantes relacionados
      }
    });
  }

  async findAll() {
    return this.prisma.role.findMany({
      include: {
        voters: true
      }
    });
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findUnique({
      where: { id_role: id },
      include: {
        voters: true
      }
    });

    if (!role) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      return await this.prisma.role.update({
        where: { id_role: id },
        data: updateRoleDto,
        include: {
          voters: true
        }
      });
    } catch (error) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.role.delete({
        where: { id_role: id }
      });
    } catch (error) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }
  }
}