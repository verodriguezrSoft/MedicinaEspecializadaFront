import { Component, OnInit } from '@angular/core';
import { TrmService } from '../../shared/service/trm.service';
import { Observable } from 'rxjs';
import { TRM } from '../../model/trm';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html',
  styles: [
  ]
})
export class TrmComponent implements OnInit {

  public trm;
  spinner = true;

  constructor(protected trmService: TrmService, private datePipe: DatePipe) { }

  public trmActual: Observable<TRM[]>;

  ngOnInit(): void {
    const milisegundoSpinner = 500;

    setTimeout(() => {
      this.spinner = false;
    }, milisegundoSpinner);

    this.obtenerTrmActualColombia();
  }

  obtenerTrmActualColombia() {
    const DIAS_MAXIMOS_VIGENCIA_TRM = 4;
    const fecha = new Date(new Date().setDate(new Date().getDate() - DIAS_MAXIMOS_VIGENCIA_TRM));
    const fechaTransformada = this.datePipe.transform(fecha, 'yyyy-MM-dd');
    this.trmActual = this.trmService.consultarPorFuera(fechaTransformada);
  }

}
