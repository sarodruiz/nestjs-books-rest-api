import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';
import { BooksResourceModule } from './books_resource/books_resource.module';

@Module({
  imports: [BooksModule, DatabaseModule, BooksResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
