import { UUID, randomUUID } from "crypto";

export enum TypeReport {
    INCOME = 'income',
    EXPENSE = 'expense'
}

export type ReportType = {
    id: UUID,
    amount: number,
    source: string,
    type: TypeReport,
    created_at: Date,
    updated_at?: Date,
}

interface Data {
    report?: ReportType[],
}
export const data: Data = {
    report: [

        {
            id: randomUUID({ disableEntropyCache: true }),
            amount: 30000,
            created_at: new Date(),
            source: 'Salary',
            type: TypeReport.EXPENSE

        },
        {
            id: randomUUID({ disableEntropyCache: true }),
            amount: 2000,
            created_at: new Date(),
            source: 'Salary',
            type: TypeReport.INCOME

        },
        {
            id: randomUUID({ disableEntropyCache: true }),
            amount: 98,
            created_at: new Date(),
            source: 'Salary',
            type: TypeReport.EXPENSE

        },
        {
            id: randomUUID({ disableEntropyCache: true }),
            amount: 1200,
            created_at: new Date(),
            source: 'Salary',
            type: TypeReport.INCOME

        }
    ]
};