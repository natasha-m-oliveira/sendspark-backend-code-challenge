import { Candidate } from 'src/app/entities/candidate';
import { CandidatesRepository } from 'src/app/repositories/candidates-repository';

export class InMemoryCandidatesRepository implements CandidatesRepository {
  public readonly candidates: Candidate[] = [];

  async create(candidate: Candidate): Promise<void> {
    this.candidates.push(candidate);
  }

  async findByEmail(email: string): Promise<Candidate | null> {
    const candidate = this.candidates.find(
      (candidate) => candidate.workEmail === email,
    );

    return candidate || null;
  }
}
