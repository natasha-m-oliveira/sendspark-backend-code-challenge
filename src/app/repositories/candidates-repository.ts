import { Candidate } from '../entities/candidate';

export abstract class CandidatesRepository {
  abstract create(candidate: Candidate): Promise<void>;
  abstract findByEmail(email: string): Promise<Candidate | null>;
  abstract findById(id: string): Promise<Candidate | null>;
}
