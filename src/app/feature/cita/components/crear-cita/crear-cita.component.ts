import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CitaService } from '../../shared/service/cita.service';

interface Especialidad {
  id: number;
  nombreEspecialidad: string
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  citaForm: FormGroup;
  selectedCar: string;

  selected = 'option2';
  selectedEspecialidad: string;
  especialidades: Especialidad [] = [
    {id: 1, nombreEspecialidad:'Cardiología clinica'},
    {id: 2, nombreEspecialidad:'Cirugía general'},
    {id: 3, nombreEspecialidad:'Prueba covid'},
    {id: 4, nombreEspecialidad:'Dermatología'},
    {id: 5, nombreEspecialidad:'Optometría'}
  ];

  constructor(protected citaService: CitaService ) { }

  ngOnInit(): void {
  }

  guardarCita(){
      this.citaService.guardarCita(this.citaForm.value);
  }

  update(event){
    this.selectedEspecialidad = event.target.value;
  }

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

}
