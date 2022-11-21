import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponseDto {
  @ApiProperty({ description: 'Total itens available' })
  readonly total: number;

  @ApiProperty({ description: 'Returned itens im the current request' })
  readonly currentItemCount: number;

  @ApiProperty({ description: 'Limit' })
  readonly limit: number;

  @ApiProperty({ description: 'Offset' })
  readonly offset: number;

  @ApiProperty({ description: 'An array with the returned data' })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly data: any[];

  constructor(dto: Partial<PaginationResponseDto>) {
    Object.assign(this, dto);
  }
}
