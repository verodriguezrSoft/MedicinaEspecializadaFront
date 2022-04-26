import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CitaRoutingModule } from './cita-routing.module';
import { BorrarCitaComponent } from './components/borrar-cita/borrar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { CitaService } from './shared/service/cita.service';


@NgModule({
  declarations: [
    BorrarCitaComponent,
    CrearCitaComponent,
    ListarCitaComponent,
    CitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule
  ],
  providers: [CitaService]
})
export class CitaModule { }
