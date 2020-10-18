import { Party } from './../domain/entities/entity.party';
import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { LGA } from '../domain/entities/entity.lga';
import { PollingUnit } from '../domain/entities/entity.polingunit';
import { PollingUnitResult } from '../domain/entities/entity.pu_result';
import { Ward } from '../domain/entities/entity.ward';

@Injectable()
export class LgaService {
  
  
    private readonly _logger: LoggerService = new Logger();
    constructor(@InjectRepository(PollingUnit) private _puRepository: Repository<PollingUnit>,
        @InjectRepository(LGA) private _lgaRepository: Repository<LGA>, 
        @InjectRepository(PollingUnitResult) private _puResultRepository: Repository<PollingUnitResult>,
        @InjectRepository(Ward) private _wardRepository: Repository<Ward>,
        @InjectRepository(Party) private _partyRepository: Repository<Party>,
    ) {

    }

  async getLGAList(): Promise<LGA[]> {
      return this._lgaRepository.find();
  }

  async getLgaResult(lgaId: number): Promise<any> {
      const pollingUnitsInLGA = await this._puRepository.find({where: {LgaId: lgaId}, select : ["uniqueid","UnitId"]});
      if(!pollingUnitsInLGA || pollingUnitsInLGA.length == 0) {
          return [];
      }
      this._logger.debug(pollingUnitsInLGA);
      const puIds = pollingUnitsInLGA.map(p=> p.uniqueid);
      const lgaResults = await this._puResultRepository.find({PUnitId: In(puIds)});
      return lgaResults;
  }

  async getWardsInLGA(lgaId: number): Promise<Ward[]> {
    return this._wardRepository.find({where: {LgaId: lgaId}});
  }
  
  async getPartyList(): Promise<Party[]>{
    return this._partyRepository.find();
  }
}
