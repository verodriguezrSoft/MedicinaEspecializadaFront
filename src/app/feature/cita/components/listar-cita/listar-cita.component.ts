import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {

  citaForm: FormGroup;
  public listaCitas: Cita [] = [];


  constructor(
    protected citaService: CitaService) {
  }

  ngOnInit(): void {
    this.getCitas(); 
  }

  public getCitas(): void{
    this.citaService.consultarCita().subscribe(
      (response: Cita[]) => {
        this.listaCitas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      } 
    );
  }

  public eliminarCita(id: number): void{
    this.citaService.eliminaCita(id).subscribe(
      (response: boolean) => {
        console.log(response);
        this.getCitas();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      } 
    );
  }
}
