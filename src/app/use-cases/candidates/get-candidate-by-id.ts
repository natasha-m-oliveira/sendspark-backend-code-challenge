import { Injectable } from '@nestjs/common';

import { Candidate } from '@app/entities/candidate';
import { CandidatesRepository } from '@app/repositories/candidates-repository';
import { CandidateNotFound } from './errors/candidate-not-found';

type GetCandidateByIdRequest = {
  id: string;
};

type GetCandidateByIdResponse = {
  candidate: Candidate;
};

@Injectable()
export class GetCandidateById {
  constructor(private candidatesRepository: CandidatesRepository) {}

  async execute(
    props: GetCandidateByIdRequest,
  ): Promise<GetCandidateByIdResponse> {
    const candidate = await this.candidatesRepository.findById(props.id);

    if (!candidate) throw new CandidateNotFound();

    return { candidate };
  }
}
