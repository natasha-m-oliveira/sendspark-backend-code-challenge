import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CandidatesRepository } from '@app/repositories/candidates-repository';
import { PrismaCandidatesRepository } from './prisma/repositories/prisma-candidates-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CandidatesRepository,
      useClass: PrismaCandidatesRepository,
    },
  ],
  exports: [CandidatesRepository],
})
export class DatabaseModule {}
