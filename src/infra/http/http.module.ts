import { Module } from '@nestjs/common';
import { CandidatesModule } from './controllers/candidates/candidates.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    CandidatesModule,
    RouterModule.register([
      {
        path: 'candidates',
        module: CandidatesModule,
      },
    ]),
  ],
})
export class HttpModule {}
