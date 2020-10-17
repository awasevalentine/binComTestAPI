import { Injectable } from '@nestjs/common';

@Injectable()
export class LgaService {
  getHello(): string {
    return 'Hello World!';
  }
}
