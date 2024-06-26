import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';
import { BooksResourceModule } from './books_resource/books_resource.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [BooksModule,
    DatabaseModule,
    BooksResourceModule,
    ThrottlerModule.forRoot([{
      name: 'short',
      ttl: 1000,
      limit: 3
    },{
      name: 'long',
      ttl: 60000,
      limit: 100
    }]),
    MyLoggerModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})
export class AppModule {}
