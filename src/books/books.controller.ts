import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    // GET /books
    @Get()
    findAll(@Query('genre') genre?: string) {
        return this.booksService.findAll(genre);
    }

    // POST /books
    @Post()
    create(@Body(ValidationPipe) book: CreateBookDto) {
        return this.booksService.create(book);
    }

    // GET /books/:id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.booksService.findOne(id);
    }

    // PATCH /books/:id
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) bookUpdate: UpdateBookDto) {
        return this.booksService.update(id, bookUpdate);
    }

    // DELETE /books/:id
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.booksService.delete(id);
    }
}
