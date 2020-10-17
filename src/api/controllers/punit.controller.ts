import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PUnitService } from 'src/core/services/punit.service';

@Controller("api/pollingunits")
@ApiTags("Polling Units")
export class PollingUnitController {
  constructor(private readonly _pUnitService: PUnitService) {}

  @Get(":id/results")
  async getPollingUnitResult(@Param("id") pUnitId: string): Promise<any[]> {
      return Promise.resolve<string[]>([]);
  }
  @Post("createResult")
  async CreatePUnitResult(@Body() resultPayload: any): Promise<any> {
      return Promise.resolve({});
  }
}
