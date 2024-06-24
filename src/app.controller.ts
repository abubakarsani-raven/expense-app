import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ReportType, TypeReport, data } from './data'
import { randomUUID } from "crypto";

@Controller('report/:type')
export class AppController {

  @Get()
  getAllReport(
    @Param('type') type: TypeReport
  ) {
    const reportType = type.toLowerCase() === "income" ? TypeReport.INCOME : TypeReport.EXPENSE;
    const reports: ReportType[] = data.report.filter(rep => {
      return rep.type === reportType;
    })
    return reports;
  }

  @Get(':id')
  getReportById(
    @Param('id') id: string,
    @Param('type') type: TypeReport
  ) {
    const reportType = type.toLowerCase() === "income" ? TypeReport.INCOME : TypeReport.EXPENSE;

    const report: ReportType = data.report.find(rep => {
      return rep.type === reportType && id === rep.id;
    })
    return report;
  }

  @Post('')
  createReport(@Param('type') type: string, @Body() body: { amount: number, source: string }) {
    const reportType = type.toLowerCase() === "income" ? TypeReport.INCOME : TypeReport.EXPENSE;
    const report: ReportType = { ...body, id: randomUUID(), created_at: new Date(), type: reportType }
    data.report.push(report);
    return report;
  }

  @Put(':id')
  updateReport(
    @Param('id') id: string,
    @Param('type') type: string,
    @Body() body: { amount?: number, source?: string }
  ) {
    const reportType = type.toLowerCase() === "income" ? TypeReport.INCOME : TypeReport.EXPENSE;

    const index: number = data.report.findIndex(rep => {
      return rep.type === reportType && id === rep.id;
    });

    const prevData = data.report[index];

    data.report[index] = { ...prevData, ...body }

    return data.report[index];
  }

  @Delete(':id')
  deleteReport(
    @Param('id') id: string,
    @Param('type') type: string
  ) {
    return `Delete a report type of ${type} with ${id}`
  }

}

/* 
THis is where all the route goes 

*/