import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';

@Injectable()
export class AdministratorsService {
    constructor(private prisma: PrismaService) { }

    // Método para obtener todos los administradores
    findAll() {
        return this.prisma.administrador.findMany({
            include: {
                elections: true // Incluir elecciones relacionadas
            }
        });
    }

    // Buscar administrador por id
    async findOne(id: number) {
        const admin = await this.prisma.administrador.findUnique({
            where: { id_admin: id },
            include: {
                elections: true
            }
        });

        if (!admin) {
            throw new NotFoundException(`Administrador con ID ${id} no encontrado`);
        }

        return admin;
    }

    // Crear nuevo administrador
    async create(newAdministrator: CreateAdministratorDto) {
        // Verificar si el email ya existe
        const existingAdmin = await this.prisma.administrador.findFirst({
            where: { correo_admin: newAdministrator.correo_admin }
        });

        if (existingAdmin) {
            throw new ConflictException('El correo electrónico ya está registrado');
        }

        return await this.prisma.administrador.create({
            data: {
                nombre_admin: newAdministrator.nombre_admin,
                apellido_admin: newAdministrator.apellido_admin,
                tipo_doc_admin: newAdministrator.tipo_doc_admin,
                num_doc_admin: newAdministrator.num_doc_admin,
                correo_admin: newAdministrator.correo_admin,
                contrasena_admin: newAdministrator.contrasena_admin
            },
            include: {
                elections: true
            }
        });
    }

    // Actualizar administrador
    async update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
        try {
            return await this.prisma.administrador.update({
                where: { id_admin: id },
                data: updateAdministratorDto,
                include: {
                    elections: true
                }
            });
        } catch (error) {
            throw new NotFoundException(`Administrador con ID ${id} no encontrado`);
        }
    }

    // Eliminar administrador
    async remove(id: number) {
        try {
            await this.prisma.administrador.delete({
                where: { id_admin: id }
            });

            return {
                success: true,
                message: `Administrador con ID ${id} eliminado correctamente`
            };
        } catch (error) {
            throw new NotFoundException(`Administrador con ID ${id} no encontrado`);
        }
    }
}