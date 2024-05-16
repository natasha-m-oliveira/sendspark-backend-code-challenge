import { compare, hash } from 'bcrypt';
import { CryptProvider } from '@app/providers/crypt-provider';

export class BcryptProvider implements CryptProvider {
  compare(data: string, hash: string): Promise<boolean> {
    return compare(data, hash);
  }
  hash(data: string): Promise<string> {
    return hash(data, 8);
  }
}
