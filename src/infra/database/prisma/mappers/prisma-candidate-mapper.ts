import { Candidate } from '@app/entities/candidate';
import { Candidate as PrismaCandidate } from '@prisma/client';

export class PrismaCandidateMapper {
  static toPrisma(candidate: Candidate): PrismaCandidate {
    return {
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      company: candidate.company,
      jobTitle: candidate.jobTitle,
      workEmail: candidate.workEmail,
      password: candidate.password,
      createdAt: candidate.createdAt,
      updatedAt: candidate.updatedAt,
    } as PrismaCandidate;
  }

  static toDomain(candidate: PrismaCandidate): Candidate {
    return new Candidate({
      id: candidate.id,
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      company: candidate.company,
      jobTitle: candidate.jobTitle,
      workEmail: candidate.workEmail,
      password: candidate.password,
      createdAt: candidate.createdAt,
      updatedAt: candidate.updatedAt,
    });
  }
}
