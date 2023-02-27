import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CreateUnityDto } from './create-unity.dto';

export class UpdateUnityDto extends PartialType(CreateUnityDto) {
  @IsNumber({}, { message: 'O campo "id" é obrigatório.' })
  @Type(() => Number)
  readonly id: bigint;
}
