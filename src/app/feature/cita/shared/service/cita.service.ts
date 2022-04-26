import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(protected http: HttpService) {}

  public consultarCita() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('consultar citas'));
  }

  public guardarCita(cita: Cita) {
    return this.http.doPost<Cita, boolean>(`${environment.endpoint}/citas`, cita,
                                                this.http.optsName('crear/actualizar citas'));
  }

  public eliminaCita(cita: Cita) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/citas/${cita.id}`,
                                                 this.http.optsName('eliminar citas'));
  }
}
