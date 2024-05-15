import { RegisterCandidate } from '@app/use-cases/candidates/register-candidate';
import { Module } from '@nestjs/common';
import { RegisterCandidateController } from './register-candidate.controller';

@Module({
  controllers: [RegisterCandidateController],
  providers: [RegisterCandidate],
})
export class CandidatesModule {}
