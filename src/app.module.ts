import { Party } from './core/domain/entities/entity.party';
import { LGA } from './core/domain/entities/entity.lga';
import { PollingUnitController } from './api/controllers/punit.controller';
import { LGAController } from './api/controllers/lga.controller';
import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LgaService } from './core/services/lga.service';
import { PUnitService } from './core/services/punit.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Ward } from './core/domain/entities/entity.ward';
import { PollingUnit } from './core/domain/entities/entity.polingunit';
import { PollingUnitResult } from './core/domain/entities/entity.pu_result';
import { PartyController } from './api/controllers/parties.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'HwQN6YFJZy',
      password: 'YNs6VmEBWP',
      database: 'HwQN6YFJZy',
      entities: [LGA, Party, Ward,PollingUnit, PollingUnitResult],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([PollingUnit, Party, Ward, LGA, PollingUnitResult])
  ],
  controllers: [LGAController, PollingUnitController,PartyController],
  providers: [AppService, LgaService, PUnitService],
})
export class AppModule {}
