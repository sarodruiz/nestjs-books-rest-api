import { Test, TestingModule } from '@nestjs/testing';
import { BooksResourceService } from './books_resource.service';

describe('BooksResourceService', () => {
  let service: BooksResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksResourceService],
    }).compile();

    service = module.get<BooksResourceService>(BooksResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
