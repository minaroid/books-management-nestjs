import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @ApiProperty({ example: 'Intro to Js', description: 'the book name' })
  name: string;

  @IsString()
  @ApiProperty({ example: '234244-234-234', description: 'the book reference' })
  reference: string;

  @IsString()
  @ApiProperty({
    example: 'Intro to Js description',
    description: 'the book description',
  })
  description: string;

  @IsString()
  @ApiProperty({
    example: 'https://books.com/book.png',
    description: 'the book image',
  })
  image: string;
}

export default CreateBookDto;
