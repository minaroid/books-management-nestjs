import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class LogInDto {
  @IsEmail()
  @ApiProperty({ example: 'minarooid@gmail.com', description: 'user email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ example: '12345678', description: 'user password' })
  password: string;
}

export default LogInDto;
