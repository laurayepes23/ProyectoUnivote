// src/voters/dto/update-voter.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateVoterDto } from './create-voter.dto';

export class UpdateVoterDto extends PartialType(CreateVoterDto) {}