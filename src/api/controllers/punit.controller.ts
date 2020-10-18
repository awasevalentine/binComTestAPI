import { Body, Controller, Get, Ip, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PollingUnit } from 'src/core/domain/entities/entity.polingunit';
import { NewPolingUnitResult } from 'src/core/domain/models/DTOs/pollingunit.model';
import { PUnitService } from 'src/core/services/punit.service';

@Controller("api/pollingunits")
@ApiTags("Polling Units")
export class PollingUnitController {
  constructor(private readonly _pUnitService: PUnitService) {}

  @Get("")
  async getPollingUnits(): Promise<PollingUnit[]>{
      return this._pUnitService.getPollingUnits();
  }

  @Get(":id/results")
  async getPollingUnitResult(@Param("id") pUnitId: number): Promise<any[]> {
      return await this._pUnitService.getPollingUnitResultById(pUnitId);
  }
  @Post("createResult")
  async CreatePUnitResult(@Body() resultPayload: NewPolingUnitResult, @Ip() ipAddress): Promise<any> {
      //please validate payload here.
      if(resultPayload) 
        resultPayload['sourceIpAddress'] = ipAddress;
      return await this._pUnitService.addPollingUnitResut(resultPayload);
  }
}
