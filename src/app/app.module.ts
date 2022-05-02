import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { CitaModule } from '@cita/cita.module';
import { TrmService } from './feature/trm/shared/service/trm.service';
import { DatePipe } from '@angular/common';
import { TrmComponent } from './feature/trm/components/trm/trm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrmComponent
  ],
  imports: [
    CitaModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [CookieService, TrmService, DatePipe],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
