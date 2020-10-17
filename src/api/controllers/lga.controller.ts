import { LgaService } from './../../core/services/lga.service';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller("api/lgas")
@ApiTags("LGAs")
export class LGAController {
  constructor(private readonly _lgaService: LgaService) {

  }

  @Get("")
  async getLGAs(): Promise<any[]> {
    return Promise.resolve<any[]>([]);
  }

  @Get(":id/results")
  async  getLGAResults(@Param('id') lgaId: string): Promise<any[]> {
      return Promise.resolve<any[]>([]);
  }
}
