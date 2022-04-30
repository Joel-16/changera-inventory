import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(body){
    console.log(body)
  }
}
