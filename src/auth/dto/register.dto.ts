import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Mina', description: 'user first name' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'george', description: 'user last name' })
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'minarooid@gmail.com', description: 'user email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ example: '12345678', description: 'user password' })
  password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'alexandria, egypt', description: 'user address' })
  address: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty({ example: '+201289983883', description: 'user phone' })
  phone: string;
}

export default RegisterDto;
