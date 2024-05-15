import { GlobalModule } from '@infra/global.module';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, GlobalModule],
})
export class AppModule {}
