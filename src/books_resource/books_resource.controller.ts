import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Ip } from '@nestjs/common';
import { BooksResourceService } from './books_resource.service';
import { Prisma } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@SkipThrottle()
@Controller('books-resource')
export class BooksResourceController {
  constructor(private readonly booksResourceService: BooksResourceService) {}

  private readonly logger = new MyLoggerService(BooksResourceController.name);

  @Post()
  create(@Body() createBooksResourceDto: Prisma.BookCreateInput) {
    return this.booksResourceService.create(createBooksResourceDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  findAll(@Ip() ip: string, @Query('genre') genre?: 'fantasy' | 'fiction' | 'novel') {
    this.logger.log(`Request for all books\t${ip}`, BooksResourceController.name);
    return this.booksResourceService.findAll(genre);
  }

  @Throttle({ short: { ttl: 1000, limit: 1 }})
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
