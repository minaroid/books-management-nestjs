import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Intro to Js', description: 'the book name' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '234244-234-234', description: 'the book reference' })
  reference: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Intro to Js description',
    description: 'the book description',
  })
  description: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'https://books.com/book.png',
    description: 'the book image',
  })
  image: string;
}

export default UpdateBookDto;
