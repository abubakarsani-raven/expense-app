import {
  IsOptional,
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
} from 'class-validator';
export class UpdateDto{
  @IsNumber()
  @IsPositive()
  @IsOptional()
  amount: number;
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  source: string;
}
