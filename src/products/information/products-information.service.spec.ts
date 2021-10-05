import { TestBed } from '@angular/core/testing';

import { ProductsInformationService } from './products-information.service';

describe('ProductsInformationService', () => {
  let service: ProductsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
