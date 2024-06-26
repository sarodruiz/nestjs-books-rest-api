import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BooksResourceService } from './books_resource.service';
import { Prisma } from '@prisma/client';

@Controller('books-resource')
export class BooksResourceController {
  constructor(private readonly booksResourceService: BooksResourceService) {}

  @Post()
  create(@Body() createBooksResourceDto: Prisma.BookCreateInput) {
    return this.booksResourceService.create(createBooksResourceDto);
  }

  @Get()
  findAll(@Query('genre') genre?: 'fantasy' | 'fiction' | 'novel') {
    return this.booksResourceService.findAll(genre);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksResourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBooksResourceDto: Prisma.BookUpdateInput) {
    return this.booksResourceService.update(+id, updateBooksResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksResourceService.remove(+id);
  }
}
