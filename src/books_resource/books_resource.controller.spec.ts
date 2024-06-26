import { Test, TestingModule } from '@nestjs/testing';
import { BooksResourceController } from './books_resource.controller';
import { BooksResourceService } from './books_resource.service';

describe('BooksResourceController', () => {
  let controller: BooksResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksResourceController],
      providers: [BooksResourceService],
    }).compile();

    controller = module.get<BooksResourceController>(BooksResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
