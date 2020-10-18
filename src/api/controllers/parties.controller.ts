import { LgaService } from './../../core/services/lga.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Ward } from 'src/core/domain/entities/entity.ward';
import { Party } from 'src/core/domain/entities/entity.party';

@Controller("api/parties")
@ApiTags("Paties")
export class PartyController {
  constructor(private readonly _lgaService: LgaService ) {

  }

  @Get("")
  async getParties(): Promise<Party[]> {
    return this._lgaService.getPartyList();
  }
}
