import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PollingUnit } from '../domain/entities/entity.polingunit';
import { PollingUnitResult } from '../domain/entities/entity.pu_result';
import { NewPolingUnitResult } from '../domain/models/DTOs/pollingunit.model';

@Injectable()
export class PUnitService {
    
    private readonly _logger: LoggerService = new Logger();
    
    constructor(@InjectRepository(PollingUnit) private _puRepository: Repository<PollingUnit>,
        @InjectRepository(PollingUnitResult) private _puResultRepository: Repository<PollingUnitResult>
    ) {
        
    }

  async getPollingUnitResultById(unitId: number): Promise<PollingUnitResult[]> {
        const puResults = await this._puResultRepository.find({where : {PUnitId: unitId}})
        return puResults;
  }

  async getPollingUnits(): Promise<PollingUnit[]> {
    return await this._puRepository.find();
  }

  async addPollingUnitResut(result: NewPolingUnitResult): Promise<any> {
      this._logger.debug(result);
      let pu = await this._puRepository.findOne({where: {PUnitName: result.pUnitName}});
      if(!pu) {
          pu = await this.createPollingUnit(result);
      }
      if(!pu)
        return {status: false, statusMessage: `Failed to create polling unit with name ${result.pUnitName}`};
      const partyResults = result.Scores.map(pResult => {
          const partyRes = new PollingUnitResult();
          partyRes.PUnitId = pu.uniqueid;
          partyRes.Party = pResult.partyName.substring(0,4);
          partyRes.PartyScore = pResult.partyScore;
          partyRes.CreatedDate = new Date();
          partyRes.EnteredBy = "SYSTEM";
          partyRes.UserIpAddress =  result.sourceIpAddress;
          return partyRes;
        });
      
      const saveRes = await this._puResultRepository.save(partyResults);
      this._logger.debug('saved pu result');
      this._logger.debug(saveRes);
      return {status: saveRes.length > 0, statusMessage: saveRes.length > 0 ? `Success saved party results for polling unit ${result.pUnitName}` :  `Failed to save party results for polling unit ${result.pUnitName}`};
  }

  private async createPollingUnit(info: NewPolingUnitResult): Promise<PollingUnit> {
      const pu = new PollingUnit();
      pu.Description = info.pUnitName;
      pu.LgaId = info.lgaId;
      pu.PUnitName = info.pUnitName;
      pu.PUnitNumber = info.pUnitNumber;
      pu.UniqueWardId = info.UniqueWardId;
      pu.UnitId = info.pUnitId;
      pu.WardId = info.wardId;
      pu.CreatedDate = new Date();
      pu.EnteredBy = "SYSTEM";
      pu.UserIpAddress =  info.sourceIpAddress;

      const res = await this._puRepository.save(pu);
      this._logger.debug(res);
      return res;
  }
}
