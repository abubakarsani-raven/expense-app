import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

/* 
This is where we have the functions that run to clean our [.controller] files 

*/
