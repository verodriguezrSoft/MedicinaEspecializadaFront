import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CitaService } from '@cita/shared/service/cita.service';
import { HttpService } from '@core/services/http.service';
import { CrearCitaComponent } from './crear-cita.component';
import { of } from 'rxjs';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService: CitaService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ],
      imports: [
        CommonModule, 
        HttpClientModule, 
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        CitaService, HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaComponent);
    component = fixture.componentInstance;
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'guardarCita').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.citaForm.valid).toBeFalsy();
  });


  it('Registrar Cita', () => {
    expect(component.citaForm.valid).toBeTruthy();
    component.citaForm.controls.id.setValue(1);
    component.citaForm.controls.idUsuario.setValue(1);
    component.citaForm.controls.fechaCita.setValue('2022-07-25 08:50:55');
    component.citaForm.controls.idEspecialidad.setValue(12345);
    component.citaForm.controls.tipoMoneda.setValue('USD');
    component.citaForm.controls.idMedico.setValue(2121);

    component.guardarCita();
  });
});
