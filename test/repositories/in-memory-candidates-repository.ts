import { randomUUID } from 'crypto';
import { Candidate } from '@app/entities/candidate';
import { CandidatesRepository } from '@app/repositories/candidates-repository';

export class InMemoryCandidatesRepository implements CandidatesRepository {
  public readonly candidates: Candidate[] = [];

  async create(candidate: Candidate): Promise<void> {
    Object.assign(candidate, { id: randomUUID() });

    this.candidates.push(candidate);
  }

  async findByEmail(email: string): Promise<Candidate | null> {
    const candidate = this.candidates.find(
      (candidate) => candidate.workEmail === email,
    );

    return candidate || null;
  }

  async findById(id: string): Promise<Candidate | null> {
    const candidate = this.candidates.find((candidate) => candidate.id === id);

    return candidate || null;
  }
}
