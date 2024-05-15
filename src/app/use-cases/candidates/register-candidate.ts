import { Injectable } from '@nestjs/common';
import { Candidate } from 'src/app/entities/candidate';
import { CandidatesRepository } from 'src/app/repositories/candidates-repository';
import { CandidateAlreadyExists } from './errors/candidate-already-exists';
import { CryptProvider } from 'src/app/providers/crypt-provider';

type RegisterCandidateRequest = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle?: string;
  workEmail: string;
  password: string;
};

type RegisterCandidateResponse = {
  candidate: Candidate;
};

@Injectable()
export class RegisterCandidate {
  constructor(
    private candidatesRepository: CandidatesRepository,
    private cryptProvider: CryptProvider,
  ) {}

  async execute(
    props: RegisterCandidateRequest,
  ): Promise<RegisterCandidateResponse> {
    const candidateAlreadyExists = await this.candidatesRepository.findByEmail(
      props.workEmail,
    );

    if (candidateAlreadyExists) throw new CandidateAlreadyExists();

    const hash = await this.cryptProvider.hash(props.password);

    const candidate = new Candidate({
      firstName: props.firstName,
      lastName: props.lastName,
      company: props.company,
      jobTitle: props.jobTitle,
      workEmail: props.workEmail,
      password: hash,
    });

    await this.candidatesRepository.create(candidate);

    return { candidate };
  }
}
