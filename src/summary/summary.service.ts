import { Injectable } from '@nestjs/common';
import { data, TypeReport } from '../data';

@Injectable()
export class SummaryService {
  async generateSummary() {
    const income = data.report.reduce((accumulator, currentValue) => {
      if (currentValue.type === TypeReport.INCOME) {
        return accumulator + currentValue.amount;
      }
      return accumulator;
    }, 0);
    const expense = data.report.reduce((accumulator, currentValue) => {
      if (currentValue.type === TypeReport.EXPENSE) {
        return accumulator + currentValue.amount;
      }
      return accumulator;
    }, 0);

    return { income, expense, netSummary: income - expense };
  }
}
