import { CryptProvider } from '@app/providers/crypt-provider';
import { BcryptProvider } from './bcrypt-provider';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: CryptProvider,
      useClass: BcryptProvider,
    },
  ],
  exports: [CryptProvider],
})
export class ProvidersModule {}
