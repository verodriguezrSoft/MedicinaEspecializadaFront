import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CitaService } from '@cita/shared/service/cita.service';
import { HttpService } from '@core/services/http.service';

import { ListarCitaComponent } from './listar-cita.component';
import { of } from 'rxjs';
import { Cita } from '@cita/shared/model/cita';
import { CommonModule } from '@angular/common';

describe('ListarCitaComponent', () => {
  let component: ListarCitaComponent;
  let fixture: ComponentFixture<ListarCitaComponent>;
  let citaService: CitaService;
  const listaCitas: Cita[] = 
  [
    new Cita(1, 1234, 1, '2019-05-05 11:20:50', 1234, 2500.0, 'USD'),
    new Cita(2, 2222, 2, '2019-05-05 11:20:50', 1234, 3700.0, 'USD'), 
  ];


  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      declarations: [ 
        ListarCitaComponent
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CitaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, "consultarCita").and.returnValue(
      of(listaCitas)
    )
    fixture.detectChanges();
  });

  it('should create component listar citas', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar las citas', () => {
    expect(2).toBe(component.citas.length)
  });
});
