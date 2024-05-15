import { RegisterCandidate } from '@app/use-cases/candidates/register-candidate';
import { Module } from '@nestjs/common';
import { RegisterCandidateController } from './register-candidate.controller';
import { GetCandidateByIdController } from './get-candidate-by-id.controller';
import { GetCandidateById } from '@app/use-cases/candidates/get-candidate-by-id';

@Module({
  controllers: [RegisterCandidateController, GetCandidateByIdController],
  providers: [RegisterCandidate, GetCandidateById],
})
export class CandidatesModule {}
