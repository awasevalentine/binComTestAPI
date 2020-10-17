import { LgaService } from './../../core/services/lga.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class LGAController {
  constructor(private readonly _lgaService: LgaService) {

  }

  @Get("")
  async getLGAs(): Promise<any[]> {
    return Promise.resolve<any[]>([]);
  }

  @Get("{id}/results")
  async  getLGAResults(@Query('id') lgaId: string): Promise<any[]> {
      return Promise.resolve<any[]>([]);
  }
}
