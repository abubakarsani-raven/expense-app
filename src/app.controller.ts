import { Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";

@Controller('report/:type')
export class AppController {

  @Get()
  getAllReport(): [] {
    return []
  }

  @Get(':id')
  getReportById(
    @Param('id') id: string,
    @Param('type') type: string
  ) {
    return `The id is ${id} of ${type}`
  }

  @Post('')
  createReport(@Param('type') type: string) {
    return `Create a new report type of ${type}`
  }

  @Put(':id')
  updateReport(
    @Param('id') id: string,
    @Param('type') type: string
  ) {
    return `Update a report type of ${type} with ${id}`
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