import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BooksResourceService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createBooksResourceDto: Prisma.BookCreateInput) {
    return this.databaseService.book.create({
      data: createBooksResourceDto
    });
  }

  async findAll(genre?: 'fantasy' | 'fiction' | 'novel') {
    if (genre) {
      return this.databaseService.book.findMany({
        where: {
          genre
        }
      });
    }
    return this.databaseService.book.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.book.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateBooksResourceDto: Prisma.BookUpdateInput) {
    return this.databaseService.book.update({
      where: {
        id
      },
      data: updateBooksResourceDto
    });
  }

  async remove(id: number) {
    return this.databaseService.book.delete({
      where: {
        id
      }
    });
  }
}
