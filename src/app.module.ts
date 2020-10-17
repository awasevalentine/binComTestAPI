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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'p@ssword001',
      database: 'bincomphptest',
      entities: [LGA, Party, Ward,PollingUnit, PollingUnitResult],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([PollingUnit, Party, Ward, LGA, PollingUnitResult])
  ],
  controllers: [AppController, LGAController, PollingUnitController],
  providers: [AppService, LgaService, PUnitService],
})
export class AppModule {}
