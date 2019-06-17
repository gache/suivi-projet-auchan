import { TestBed } from '@angular/core/testing';

import { ProjetStatusService } from './projet-status.service';

describe('ProjetStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetStatusService = TestBed.get(ProjetStatusService);
    expect(service).toBeTruthy();
  });
});
