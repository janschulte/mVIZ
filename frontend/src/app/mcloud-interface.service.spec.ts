import { TestBed } from '@angular/core/testing';

import { DatasetInterface } from './mcloud-interface.service';

describe('McloudInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasetInterface = TestBed.get(DatasetInterface);
    expect(service).toBeTruthy();
  });
});
