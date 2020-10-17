import { LgaService } from './../../core/services/lga.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller("api/lgas")
@ApiTags("LGAs")
export class LGAController {
  constructor(private readonly _lgaService: LgaService) {

  }

  @Get("")
  async getLGAs(): Promise<any[]> {
    return this._lgaService.getLGAList();
  }

  @Get(":id/results")
  async  getLGAResults(@Param('id') lgaId: number): Promise<any[]> {
      return this._lgaService.getLgaResult(lgaId);
  }
}
