import { TestBed } from '@angular/core/testing';

import { HttpProxyService } from './http-proxy.service';

describe('HttpProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpProxyService = TestBed.get(HttpProxyService);
    expect(service).toBeTruthy();
  });
});
