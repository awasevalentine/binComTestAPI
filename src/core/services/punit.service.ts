import { Injectable } from '@nestjs/common';

@Injectable()
export class PUnitService {
  getHello(): string {
    return 'Hello World!';
  }
}
