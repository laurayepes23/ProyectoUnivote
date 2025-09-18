// src/roles/roles.module.ts
import { Module } from '@nestjs/common';
import { RolesService } from './role.service';
import { RolesController } from './role.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService]
})
export class RolesModule {}