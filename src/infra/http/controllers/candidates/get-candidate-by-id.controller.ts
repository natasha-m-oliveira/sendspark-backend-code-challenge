import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { HttpMapperInterceptor } from '@infra/http/interceptors/http-mapper.interceptor';
import { GetCandidateById } from '@app/use-cases/candidates/get-candidate-by-id';

@Controller()
export class GetCandidateByIdController {
  constructor(private getCandidateById: GetCandidateById) {}

  @Get(':id')
  @UseInterceptors(HttpMapperInterceptor)
  async handle(@Param('id') id: string) {
    const { candidate } = await this.getCandidateById.execute({
      id,
    });

    return candidate;
  }
}
