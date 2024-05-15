import { InMemoryCandidatesRepository } from '@test/repositories/in-memory-candidates-repository';
import { RegisterCandidate } from './register-candidate';
import { BcryptProvider } from '@infra/providers/bcrypt-provider';
import { CandidateAlreadyExists } from './errors/candidate-already-exists';

describe('Register Candidate', () => {
  let candidatesRepository: InMemoryCandidatesRepository;
  let cryptProvider: BcryptProvider;
  let registerCandidate: RegisterCandidate;

  beforeEach(() => {
    candidatesRepository = new InMemoryCandidatesRepository();
    cryptProvider = new BcryptProvider();
    registerCandidate = new RegisterCandidate(
      candidatesRepository,
      cryptProvider,
    );
  });

  it('should be able to register a new candidate', async () => {
    const { candidate } = await registerCandidate.execute({
      firstName: 'Annie',
      lastName: 'Klein',
      company: 'Lithuania',
      workEmail: 'par@rizibupe.sn',
      password: 'CALZ2BJz',
    });

    expect(candidate).toEqual(candidatesRepository.candidates[0]);
  });

  it('should not be able to register candidate already exists', async () => {
    await registerCandidate.execute({
      firstName: 'Seth',
      lastName: 'Thornton',
      company: 'Barbados',
      workEmail: 've@nidafib.bi',
      password: 'ZQY2HpgC',
    });

    await expect(
      registerCandidate.execute({
        firstName: 'Nelle',
        lastName: 'Gregory',
        company: 'Barbados',
        workEmail: 've@nidafib.bi',
        password: 'TNuppaPX',
      }),
    ).rejects.toBeInstanceOf(CandidateAlreadyExists);
  });
});
