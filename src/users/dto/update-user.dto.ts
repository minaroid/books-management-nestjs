import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Mina', description: 'user first name' })
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'george', description: 'user last name' })
  lastName: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ example: 'minarooid@gmail.com', description: 'user email' })
  email: string;

  @IsPhoneNumber()
  @IsOptional()
  @ApiProperty({ example: '+201289983883', description: 'user phone' })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'alexandria, egypt', description: 'user address' })
  address: string;
}

export default UpdateUserDto;
