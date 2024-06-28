import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { data, ReportType, TypeReport } from '../data';
import { CreateReportDto, ReportResponse } from '../dto/report.dto';
import { randomUUID } from 'crypto';
import { UpdateDto } from '../dto/update.dto';
import { ReportService } from './report.service';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReport(
    @Param('type', new ParseEnumPipe(TypeReport)) type: TypeReport,
  ): ReportResponse[] {
    const reportType =
      type.toLowerCase() === 'income' ? TypeReport.INCOME : TypeReport.EXPENSE;
    return this.reportService.getAllReport({ type: reportType });
  }

  @Get(':id')
  getReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type') type: TypeReport,
  ) {
    const reportType =
      type.toLowerCase() === 'income' ? TypeReport.INCOME : TypeReport.EXPENSE;

    return this.reportService.getReportById({ id: id, type: reportType });
  }

  @Post('')
  createReport(
    @Param('type') type: string,
    @Body() body: CreateReportDto,
  ): ReportResponse {
    const reportType =
      type.toLowerCase() === 'income' ? TypeReport.INCOME : TypeReport.EXPENSE;
    const report: ReportType = {
      ...body,
      id: randomUUID(),
      created_at: new Date(),
      type: reportType,
    };
    data.report.push(report);
    return new ReportResponse(report);
  }

  @Put(':id')
  updateReport(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(TypeReport)) type: string,
    @Body() body: UpdateDto,
  ): ReportResponse {
    const reportType =
      type.toLowerCase() === 'income' ? TypeReport.INCOME : TypeReport.EXPENSE;

    const index: number = data.report.findIndex((rep) => {
      return rep.type === reportType && id === rep.id;
    });
    const prevData = data.report[index];

    data.report[index] = { ...prevData, ...body, updated_at: new Date() };

    return new ReportResponse(data.report[index]);
  }

  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string): ReportResponse[] {
    const newData = data.report.filter((rep) => {
      return rep.id !== id;
    });
    data.report = [...newData];
    return newData.map((item) => new ReportResponse(item));
  }
}
