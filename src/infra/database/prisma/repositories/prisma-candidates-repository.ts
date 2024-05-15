import { Candidate } from '@app/entities/candidate';
import { CandidatesRepository } from '@app/repositories/candidates-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaCandidateMapper } from '../mappers/prisma-candidate-mapper';

@Injectable()
export class PrismaCandidatesRepository extends CandidatesRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(candidate: Candidate): Promise<void> {
    const { id } = await this.prisma.candidate.create({
      data: PrismaCandidateMapper.toPrisma(candidate),
    });

    Object.assign(candidate, { id });
  }

  async findByEmail(email: string): Promise<Candidate | null> {
    const candidate = await this.prisma.candidate.findUnique({
      where: {
        workEmail: email,
      },
    });

    if (!candidate) return null;

    return PrismaCandidateMapper.toDomain(candidate);
  }
}
