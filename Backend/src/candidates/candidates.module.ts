import { Module } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CandidatesController],
  providers: [CandidatesService],
  //Exportar el PrismaModule para que pueda ser utilizado en el CandidatesService
  imports: [PrismaModule],
})
export class CandidatesModule {}
