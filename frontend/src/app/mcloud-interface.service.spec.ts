import { TestBed } from '@angular/core/testing';

import { McloudInterfaceService } from './mcloud-interface.service';

describe('McloudInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McloudInterfaceService = TestBed.get(McloudInterfaceService);
    expect(service).toBeTruthy();
  });
});
