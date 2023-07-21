import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManifestModule } from './manifest/manifest.module';

@Module({
  imports: [ManifestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
