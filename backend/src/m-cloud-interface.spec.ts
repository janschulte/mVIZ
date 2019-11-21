import { Test, TestingModule } from '@nestjs/testing';
import { MCloudInterface } from './m-cloud-interface';

describe('MCloudInterface', () => {
  let provider: MCloudInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MCloudInterface],
    }).compile();

    provider = module.get<MCloudInterface>(MCloudInterface);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
