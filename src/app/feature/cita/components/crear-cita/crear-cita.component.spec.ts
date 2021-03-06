import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { CitaService } from '../../shared/service/cita.service';
import { CrearCitaComponent } from './crear-cita.component';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { TrmService } from 'src/app/feature/trm/shared/service/trm.service';


describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService: CitaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearCitaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        CitaService, HttpService, DatePipe, TrmService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaComponent);
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
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.idUsuario.setValue(1);
    component.citaForm.controls.fechaCita.setValue('2022-07-25 08:50:55');
    component.citaForm.controls.idEspecialidad.setValue(2);
    component.citaForm.controls.tipoMoneda.setValue('USD');
    component.citaForm.controls.idMedico.setValue(1);
    component.citaForm.controls.valorTRM.setValue(3520);
    expect(component.citaForm.valid).toBeTruthy();

    component.guardarCita();
  });


  it('Actualizar Cita', () => {
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.id.setValue(1);
    component.citaForm.controls.idUsuario.setValue(1);
    component.citaForm.controls.fechaCita.setValue('2022-07-25 08:50:55');
    component.citaForm.controls.idEspecialidad.setValue(2);
    component.citaForm.controls.tipoMoneda.setValue('USD');
    component.citaForm.controls.idMedico.setValue(1);
    component.citaForm.controls.valorTRM.setValue(3520);
    expect(component.citaForm.valid).toBeTruthy();

    component.guardarCita();
  });


  // it('Eliminar Cita', () => {
  //   expect(component.citaForm.valid).toBeFalsy();
  //   component.citaForm.controls.id.setValue(1);
  //   expect(component.citaForm.valid).toBeTruthy();
  //   component.eliminarCita();
  // })
});
