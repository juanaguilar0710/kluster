/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuildcardService } from './buildcard.service';

describe('Service: Buildcard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildcardService]
    });
  });

  it('should ...', inject([BuildcardService], (service: BuildcardService) => {
    expect(service).toBeTruthy();
  }));
});
