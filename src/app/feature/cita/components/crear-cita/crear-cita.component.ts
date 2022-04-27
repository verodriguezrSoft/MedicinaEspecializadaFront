import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

interface Especialidad {
  id: number;
  nombreEspecialidad: string
}

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  citaForm: FormGroup;
  selectedEspecialidad: string;
  cita: Cita = Cita.unRegistroCita({})

  especialidades: Especialidad [] = [
    {id: 1, nombreEspecialidad:'Cardiología clinica'},
    {id: 2, nombreEspecialidad:'Cirugía general'},
    {id: 3, nombreEspecialidad:'Prueba covid'},
    {id: 4, nombreEspecialidad:'Dermatología'},
    {id: 5, nombreEspecialidad:'Optometría'}
  ];

  constructor(
    protected citaService: CitaService,
    // private fb: FormBuilder 
    ) { 
    console.log(this.especialidades)
  }

  ngOnInit(): void {
    this.construirFormularioCita();
  }

  guardarCita(){
      console.log('Guardar' + this.citaForm.value.id)
      this.citaService.guardarCita(this.citaForm.value);
  }

  update(event){
    console.log('Event' + event.target.value)
    this.selectedEspecialidad = event.target.value;
  }

  private construirFormularioCita(){
    this.citaForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        idUsuario: new FormControl('', Validators.required),
        fechaCita: new FormControl('', Validators.required),
        idEspecialidad: new FormControl('', Validators.required),
        idMedico: new FormControl('', Validators.required),
        precioCita: new FormControl('', Validators.required),
        tipoMoneda: new FormControl('', Validators.required)
    });
  }


}
