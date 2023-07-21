import { Module } from '@nestjs/common';
import { ManifestService } from './manifest.service';
import { ManifestController } from './manifest.controller';

@Module({
  controllers: [ManifestController],
  providers: [ManifestService],
})
export class ManifestModule {}
