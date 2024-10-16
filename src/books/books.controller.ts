import {
  Controller,
  Get,
  UseGuards,
  Body,
  Query,
  Delete,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { JwtAuthenticationGuard } from '../common/guards/jwt-authentication.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import RoleType from 'src/common/constants/role-type.constant';
import PaginationParams from 'src/common/types/pagination-params.type';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';

@ApiTags('books')
@Controller({ path: 'books', version: '1' })
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('')
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'create book' })
  @ApiResponse({
    status: 201,
    description: 'Return created book object',
  })
  @ApiBody({ type: CreateBookDto })
  async create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }

  @Get('')
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(RoleType.ADMIN, RoleType.USER)
  @ApiOperation({ summary: 'return list all books' })
  @ApiResponse({
    status: 200,
    description: 'Return all books',
  })
  @ApiQuery({ type: PaginationParams })
  async list(@Query() query: PaginationParams) {
    return this.booksService.findAll(query);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  @ApiOperation({ summary: 'delete book' })
  @ApiResponse({
    status: 200,
    description: 'book deleted',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the book',
    type: String,
    example: '12345',
  })
  delete(@Param('id') id: number) {
    return this.booksService.deleteOneById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  @ApiParam({
    name: 'id',
    description: 'The ID of the book',
    type: String,
    example: '12345',
  })
  @ApiOperation({ summary: 'update book' })
  @ApiResponse({
    status: 201,
    description: 'Return updated book object',
  })
  @ApiBody({ type: UpdateBookDto })
  update(@Param('id') id: number, @Body() dto: UpdateBookDto) {
    return this.booksService.update(id, dto);
  }

  @Get(':id')
  @UseGuards(JwtAuthenticationGuard, RolesGuard)
  @Roles(RoleType.ADMIN, RoleType.USER)
  @ApiParam({
    name: 'id',
    description: 'The ID of the book',
    type: String,
    example: '12345',
  })
  @ApiOperation({ summary: 'fetch book' })
  @ApiResponse({
    status: 200,
    description: 'Return book object',
  })
  find(@Param('id') id: number) {
    return this.booksService.find(id);
  }
}
