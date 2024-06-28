import { IsNumber, IsPositive, IsString, IsNotEmpty } from 'class-validator';
import { TypeReport } from '../data';
import { Exclude, Expose } from 'class-transformer';
import { UUID } from 'crypto';

export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsNotEmpty()
  @IsString()
  source: string;
}

/*
 * We need it to perform global validation go to main.ts file using useGLobalPipe
 *
 * */

/*
THis DTO underneath is for the response
 * */
export class ReportResponse {
  id: UUID;
  source: string;
  amount: number;
  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;
  type: TypeReport;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }
  constructor(partial: Partial<ReportResponse>) {
    Object.assign(this, partial);
  }
}
