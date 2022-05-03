import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';
import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndPointCitasConsulta = `${environment.endpoint}/citas`;
  const apiEndPointCitas = `${environment.endpoint}/citas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const citaService: CitaService = TestBed.inject(CitaService);
    expect(citaService).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const dummyCitas: Cita[] = [
      new Cita(1, 1234, 1, '2019-05-05 11:20:50', 1234, 2500.0, 'USD'),
      new Cita(2, 2222, 2, '2019-05-05 11:20:50', 1234, 3700.0, 'USD'),
    ];
    service.consultarCita().subscribe( citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });
    const req = httpMock.expectOne(apiEndPointCitasConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });


  it('deberia crear una cita', () => {
    const dummyCita = new Cita( 1, 1234, 1, '2019-05-05 11:20:50', 1234, 2500.0, 'USD');
    service.guardarCita(dummyCita).subscribe(response => {
      expect(response).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointCitas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un usuario', () => {
    const dummyCita = new Cita(1, 1234, 1, '2019-05-05 11:20:50', 1234, 2500.0, 'USD');
    service.eliminaCita(dummyCita.id).subscribe(response => {
      expect(response).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndPointCitas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
