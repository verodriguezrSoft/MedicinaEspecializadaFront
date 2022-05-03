import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { TRM } from '../../model/trm';

@Injectable({
  providedIn: "root"
})
export class TrmService {

  constructor(
    protected http: HttpService
  ) { }

  public consultarPorFuera(fecha: string) {
    const query = `SELECT * WHERE vigenciadesde>="${fecha}" ORDER BY vigenciahasta DESC`;
    const httpParams = new HttpParams().set('$query', query);
    // console.log(this.http.doGetParameters<TRM[]>(`${environment.urlTrm}`, httpParams, this.http.optsTRM(`${environment.tokenTrm}`)))
    return this.http.doGetParameters<TRM[]>(`${environment.urlTrm}`, httpParams, this.http.optsTRM(`${environment.tokenTrm}`));
  }
}
