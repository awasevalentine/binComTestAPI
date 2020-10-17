import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { LGA } from '../domain/entities/entity.lga';
import { PollingUnit } from '../domain/entities/entity.polingunit';
import { PollingUnitResult } from '../domain/entities/entity.pu_result';

@Injectable()
export class LgaService {
  
    private readonly _logger: LoggerService = new Logger();
    constructor(@InjectRepository(PollingUnit) private _puRepository: Repository<PollingUnit>,
        @InjectRepository(LGA) private _lgaRepository: Repository<LGA>, 
        @InjectRepository(PollingUnitResult) private _puResultRepository: Repository<PollingUnitResult>
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
}
