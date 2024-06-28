import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { ReportService } from '../report/report.service';
import { TypeReport } from '../data';

@Controller('summary')
export class SummaryController {
  constructor(
    private readonly summaryService: SummaryService,
    private readonly reportService: ReportService,
  ) {}

  @Get('/:type')
  async generateSummary() {
    const { netSummary, income, expense } =
      await this.summaryService.generateSummary();
    return { netSummary, income, expense };
  }
  @Get('/test/op')
  async test() {
    return this.reportService.getAllReport({ type: TypeReport.INCOME });
  }
}
