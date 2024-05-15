import { NotFoundException } from '@nestjs/common';

export class CandidateNotFound extends NotFoundException {
  constructor() {
    super('Candidate not found.');
  }
}
