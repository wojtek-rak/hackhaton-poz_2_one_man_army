import { TestBed } from '@angular/core/testing';

import { MapsDataService } from './maps-data.service';

describe('MapsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapsDataService = TestBed.get(MapsDataService);
    expect(service).toBeTruthy();
  });
});
