// src/candidates/candidates.controller.ts
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Get,
  Patch,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { LoginCandidateDto } from './dto/login-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) { }

  @Get()
  findAll() {
    return this.candidatesService.findAll();
  }

  // --- NUEVO ENDPOINT PARA OBTENER UN CANDIDATO Y SUS PROPUESTAS ---
  @Get(':id/proposals')
  findOneWithProposals(@Param('id') id: string) {
    return this.candidatesService.findOneWithProposals(+id);
  }
  // --- FIN DEL ENDPOINT NUEVO ---

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidatesService.update(+id, updateCandidateDto);
  }


  @Post('register')
  @UseInterceptors(
    FileInterceptor('foto_candidate', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const extension = extname(file.originalname);
          cb(null, `${uniqueSuffix}${extension}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file) {
          cb(null, true);
        } else if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return cb(new BadRequestException('Solo se permiten archivos de imagen.'), false);
        }
        cb(null, true);
      },
    }),
  )
  async register(
    @Body() createCandidateDto: CreateCandidateDto,
    @UploadedFile() foto_candidate: Express.Multer.File,
  ) {
    return this.candidatesService.create(createCandidateDto, foto_candidate);
  }

  @Post('login')
  async login(@Body() loginCandidateDto: LoginCandidateDto) {
    return this.candidatesService.login(loginCandidateDto);
  }
}