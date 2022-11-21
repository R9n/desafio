import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsInt, Min, Max } from 'class-validator';
import {
  DEFAULT_PAGINATION_SIZE,
  MAX_PAGINATION_SIZE,
  MIN_OFFSET_SIZE,
  MIN_PAGINATION_SIZE,
} from 'src/configs/constants';

export class PaginationDto {
  @ApiProperty({ description: 'Max records to take per request' })
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    minimum: MIN_PAGINATION_SIZE,
    maximum: MAX_PAGINATION_SIZE,
    default: DEFAULT_PAGINATION_SIZE,
  })
  @Min(MIN_PAGINATION_SIZE)
  @Max(MAX_PAGINATION_SIZE)
  @IsInt()
  limit: number = DEFAULT_PAGINATION_SIZE;

  @ApiProperty({ description: 'Records to skip' })
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({
    minimum: MIN_OFFSET_SIZE,
    default: MIN_OFFSET_SIZE,
  })
  @Min(MIN_OFFSET_SIZE)
  @IsInt()
  offset: number = MIN_OFFSET_SIZE;

  @ApiProperty({
    description:
      'Order to sort the results with the releaseDate field (by default is DESC)',
    default: 'DESC',
  })
  @IsOptional()
  order: 'ASC' | 'DESC';

  constructor(filterFilmDto: Partial<PaginationDto>) {
    Object.assign(this, filterFilmDto);
  }
}
