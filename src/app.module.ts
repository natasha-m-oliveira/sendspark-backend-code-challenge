import { GlobalModule } from '@infra/global.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [GlobalModule],
})
export class AppModule {}
