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

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  citaForm: FormGroup;
  selectedEspecialidad: string;
  pipe = new DatePipe('en-US');

  especialidades: Especialidad [] = [
    {id: 1, nombreEspecialidad:'Cardiología clinica'},
    {id: 2, nombreEspecialidad:'Cirugía general'},
    {id: 3, nombreEspecialidad:'Prueba covid'},
    {id: 4, nombreEspecialidad:'Dermatología'},
    {id: 5, nombreEspecialidad:'Optometría'}
  ];


  medicos: Medico [] = [
    {id: 1, nombre: "Tatiana Salazar"},
    {id: 2, nombre: "Harold Moreno"},
    {id: 3, nombre: "Tatiana Salazar"},
    {id: 4, nombre: "Tatiana Salazar"},
  ]

  monedas: Moneda [] = [
    {tipo: "USD", nombreCompleto: "DOLARES"},
    {tipo: "COP", nombreCompleto: "PESOS COLOMBIANOS"},
  ];


  constructor(
    protected citaService: CitaService
    ) { 
    console.log(this.especialidades)
  }

  ngOnInit(): void {
    this.construirFormularioCita();
  }

  guardarCita(){
      console.log('Guardar' + this.citaForm.value.id)
      this.citaForm.value.fechaCita = this.pipe.transform(this.citaForm.value.fechaCita, 'yyyy-MM-dd HH:mm:ss')
      this.citaForm.value.valorTRM = 3700.00
      this.registrarCita(this.citaForm.value)
  }

  update(event){
    console.log('Event' + event.target.value)
    this.selectedEspecialidad = event.target.value;
  }

  private construirFormularioCita(){
    this.citaForm = new FormGroup({
        // id: new FormControl('', [Validators.required]),
        idUsuario: new FormControl('', Validators.required),
        fechaCita: new FormControl('', Validators.required),
        idEspecialidad: new FormControl('', Validators.required),
        idMedico: new FormControl('', Validators.required),
        // valorTRM: new FormControl('', Validators.required),
        tipoMoneda: new FormControl('', Validators.required)
    });
  }

  registrarCita(cita: Cita) : void{
    console.log(this.citaForm.value);
    this.citaService.guardarCita(cita).subscribe(
      response => {
        console.log('success', response)
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'La cita se ha sido guardado correctamente'
        })
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


}
