// src/votes/votes.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Controller('votes')
export class VotesController {
    constructor(private readonly votesService: VotesService) { }

    @Post()
    async create(@Body() createVoteDto: CreateVoteDto) {
        return this.votesService.createVote(createVoteDto);
    }

    @Get()
    async findAll() {
        return this.votesService.getVotes();
    }
}