import { PollingUnitController } from './api/controllers/punit.controller';
import { LGAController } from './api/controllers/lga.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LgaService } from './core/services/lga.service';
import { PUnitService } from './core/services/punit.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'p@ssword001',
      database: 'bincomphptest',
      entities: [],
      synchronize: true,
    })
  ],
  controllers: [AppController, LGAController, PollingUnitController],
  providers: [AppService, LgaService, PUnitService],
})
export class AppModule {}
