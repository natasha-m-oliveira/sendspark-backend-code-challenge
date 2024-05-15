export abstract class CryptProvider {
  abstract compare(data: string, hash: string): Promise<boolean>;
  abstract hash(data: string): Promise<string>;
}
