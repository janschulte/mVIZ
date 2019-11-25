import { Test, TestingModule } from '@nestjs/testing';
import { DatasetController } from './dataset.controller';

describe('AppController', () => {
  let appController: DatasetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DatasetController],
      providers: [],
    }).compile();

    appController = app.get<DatasetController>(DatasetController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
