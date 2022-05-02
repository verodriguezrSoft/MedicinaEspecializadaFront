// import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
// import { environment } from 'src/environments/environment';
import { CitaService } from './cita.service';

describe('CitaService', () => {
  // let httpMock: HttpTestingController;
  let service: CitaService;
  // const apiEndPointCitasConsula = `${environment.endpoint}/`;
  // const apiEndPointCitas = `${environment.endpoint}/`;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
