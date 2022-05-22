import { TestBed } from '@angular/core/testing';

import { UsuarioServicesService } from './usuario-services.service';

describe('UsuarioServicesService', () => {
  let service: UsuarioServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
