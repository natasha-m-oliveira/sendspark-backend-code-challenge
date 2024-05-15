import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class RegisterCandidateBody {
  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  company: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  jobTitle?: string | null;

  @IsNotEmpty()
  @IsEmail()
  workEmail: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    minLowercase: 0,
  })
  @MaxLength(120)
  password: string;
}
