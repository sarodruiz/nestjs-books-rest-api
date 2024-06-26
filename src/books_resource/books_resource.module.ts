import { Module } from '@nestjs/common';
import { BooksResourceService } from './books_resource.service';
import { BooksResourceController } from './books_resource.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksResourceController],
  providers: [BooksResourceService],
})
export class BooksResourceModule {}
