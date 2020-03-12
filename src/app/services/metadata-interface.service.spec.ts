import { TestBed } from '@angular/core/testing';

import { MetadataInterfaceService } from './metadata-interface.service';

describe('MetadataInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetadataInterfaceService = TestBed.get(MetadataInterfaceService);
    expect(service).toBeTruthy();
  });
});
