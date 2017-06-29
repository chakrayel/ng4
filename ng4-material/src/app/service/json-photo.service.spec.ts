import { TestBed, inject } from '@angular/core/testing';

import { JsonPhotoService } from './json-photo.service';

describe('JsonPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPhotoService]
    });
  });

  it('should be created', inject([JsonPhotoService], (service: JsonPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
