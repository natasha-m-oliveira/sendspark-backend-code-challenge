import { BadRequestException } from '@nestjs/common';

export class CandidateAlreadyExists extends BadRequestException {
  constructor() {
    super('Candidate already exists.');
  }
}
