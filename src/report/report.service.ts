import { Injectable } from '@nestjs/common';
import { data, TypeReport } from '../data';
import { ReportResponse } from '../dto/report.dto';

@Injectable()
export class ReportService {
  getAllReport({ type }: { type: TypeReport }): ReportResponse[] {
    return data.report
      .filter((rep) => {
        return rep.type === type;
      })
      .map((item) => new ReportResponse(item));
  }

  getReportById({
    id,
    type,
  }: {
    id: string;
    type: TypeReport;
  }): ReportResponse {
    return <ReportResponse>data.report.find((rep) => {
      return rep.type === type && id === rep.id;
    });
  }
}
