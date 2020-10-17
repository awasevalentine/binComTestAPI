import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PUnitService } from 'src/core/services/punit.service';

@Controller()
export class PollingUnitController {
  constructor(private readonly _pUnitService: PUnitService) {}

  @Get("{id}/results")
  async getPollingUnitResult(@Query("id") pUnitId: string): Promise<any[]> {
      return Promise.resolve<string[]>([]);
  }
  @Post("createResult")
  async CreatePUnitResult(@Body() resultPayload: any): Promise<any> {
      return Promise.resolve({});
  }
}
