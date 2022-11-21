import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OK } from 'http-status';
import { PaginationResponseDto } from 'src/utils/dtos/pagination.response.dto';
import { PaginationDto } from '../../utils/dtos/pagination.query.dto';
import { Film } from './entities/film-entity';
import { FilmService } from './film.service';

@Controller('films')
@ApiTags('films')
export class FilmsController {
  constructor(private readonly filmService: FilmService) {}

  @ApiOkResponse({
    status: OK,
    type: PaginationResponseDto,
  })
  @Get()
  @UsePipes(ValidationPipe)
  getMany(@Query() filterDto: PaginationDto): Promise<PaginationResponseDto> {
    return this.filmService.getMany(filterDto);
  }

  @ApiOkResponse({
    status: OK,
    type: () => Film,
  })
  @ApiNotFoundResponse({ description: 'Film not found' })
  @Get('/:id')
  @UsePipes(ValidationPipe)
  getOne(@Param('id') filmId: string): Promise<Film> {
    return this.filmService.getOne(filmId);
  }
}
