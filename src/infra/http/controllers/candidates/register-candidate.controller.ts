import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { RegisterCandidateBody } from '@infra/http/dtos/register-candidate-body';
import { RegisterCandidate } from '@app/use-cases/candidates/register-candidate';
import { HttpMapperInterceptor } from '@infra/http/interceptors/http-mapper.interceptor';

@Controller()
export class RegisterCandidateController {
  constructor(private registerCandidate: RegisterCandidate) {}

  @Post()
  @UseInterceptors(HttpMapperInterceptor)
  async handle(@Body() body: RegisterCandidateBody) {
    const { candidate } = await this.registerCandidate.execute(body);

    return candidate;
  }
}
