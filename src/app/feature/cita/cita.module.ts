import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CitaRoutingModule } from './cita-routing.module';
import { BorrarCitaComponent } from './components/borrar-cita/borrar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { CitaService } from './shared/service/cita.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    BorrarCitaComponent,
    CrearCitaComponent,
    ListarCitaComponent,
    CitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [CitaService]
})
export class CitaModule { }
