import { Candidate } from '@app/entities/candidate';
import { GetCandidateById } from '@app/use-cases/candidates/get-candidate-by-id';
import { InMemoryCandidatesRepository } from '@test/repositories/in-memory-candidates-repository';

describe('Get Candidate By Id', () => {
  let candidatesRepository: InMemoryCandidatesRepository;
  let getCandidateById: GetCandidateById;

  beforeEach(() => {
    candidatesRepository = new InMemoryCandidatesRepository();

    getCandidateById = new GetCandidateById(candidatesRepository);
  });

  it('should be able to get candidate by id', async () => {
    await candidatesRepository.create(
      new Candidate({
        firstName: 'Stella',
        lastName: 'Strickland',
        company: 'Eritrea',
        workEmail: 'rejifba@avu.cv',
        password: 'R9zmdvP1',
      }),
    );

    const { candidate } = await getCandidateById.execute({
      id: candidatesRepository.candidates[0].id,
    });

    expect(candidate).toEqual(candidatesRepository.candidates[0]);
  });
});
