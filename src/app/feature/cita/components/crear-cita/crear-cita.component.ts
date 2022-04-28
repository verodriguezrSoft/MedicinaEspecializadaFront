import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Especialidad } from '../../shared/model/especialidad';
import { Medico } from '../../shared/model/medico';
import { Moneda } from '../../shared/model/moneda';
// import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

import Swal from 'sweetalert2'
import { Cita } from '../../shared/model/cita';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  citaForm: FormGroup;
  pipe = new DatePipe('en-US');
  idCita: number;
  citaEditar: Cita;

  especialidades: Especialidad[] = [
    { id: 1, nombreEspecialidad: 'Cardiología clinica' },
    { id: 2, nombreEspecialidad: 'Cirugía general' },
    { id: 3, nombreEspecialidad: 'Prueba covid' },
    { id: 4, nombreEspecialidad: 'Dermatología' },
    { id: 5, nombreEspecialidad: 'Optometría' }
  ];

  medicos: Medico[] = [
    { id: 1, nombre: "Tatiana Salazar" },
    { id: 2, nombre: "Harold Moreno" },
    { id: 3, nombre: "Calors Salazar" },
    { id: 4, nombre: "Jose Robert" },
  ]

  monedas: Moneda[] = [
    { tipo: "USD", nombreCompleto: "DOLARES" },
    { tipo: "COP", nombreCompleto: "PESOS COLOMBIANOS" },
  ];


  constructor(
    protected citaService: CitaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.construirFormularioCita();
    this.idCita = this.route.snapshot.params['id'];
    if (this.idCita) {
      this.listarCita(this.idCita)
    }
  }

  guardarCita() {
    console.log('Guardar' + this.citaForm.value.id)
    this.citaForm.value.fechaCita = this.pipe.transform(this.citaForm.value.fechaCita, 'yyyy-MM-dd HH:mm:ss')
    this.citaForm.value.valorTRM = 3700.00
    this.registrarCita(this.citaForm.value)
  }


  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      id: new FormControl(''),
      idUsuario: new FormControl('', Validators.required),
      fechaCita: new FormControl('', Validators.required),
      idEspecialidad: new FormControl('', Validators.required),
      idMedico: new FormControl('', Validators.required),
      valorTRM: new FormControl(''),
      tipoMoneda: new FormControl('', Validators.required)
    });
  }

  registrarCita(cita: Cita): void {
    console.log(this.citaForm.value);
    this.citaService.guardarCita(cita).subscribe(
      response => {
        console.log('success', response)
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'La cita se ha sido guardado correctamente'
        })
        this.router.navigate(['cita/listar'])
        this.citaForm.reset();
      },
      error => {
        console.log('oops', error)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error?.['mensaje']
        })
      });
  }

  listarCita(idCita: number) {
    this.citaService.consultarCitaPorId(idCita).subscribe(
      (response: Cita) => {
        console.log("Response: ", response)
        this.citaEditar = response;
        this.llenarCamposEditar(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  llenarCamposEditar(cita: Cita){
    this.citaForm.controls['idUsuario'].setValue(cita.idUsuario);
    this.citaForm.controls['fechaCita'].setValue(this.pipe.transform(cita.fechaCita, 'yyyy-MM-ddTHH:mm:ss'));
    this.citaForm.controls['idEspecialidad'].setValue(cita.idEspecialidad);
    this.citaForm.controls['tipoMoneda'].setValue(cita.tipoMoneda);
    this.citaForm.controls['idMedico'].setValue(cita.idMedico);
  }

}
