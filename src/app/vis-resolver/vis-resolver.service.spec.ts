import { TestBed } from '@angular/core/testing';

import { VisResolverService } from './vis-resolver.service';

describe('VisResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisResolverService = TestBed.get(VisResolverService);
    expect(service).toBeTruthy();
  });
});
