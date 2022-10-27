import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';
import { AdatokListazasComponent } from './adatok-listazas/adatok-listazas.component';
import { UjAdatFelvetelComponent } from './uj-adat-felvetel/uj-adat-felvetel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NyitoOldalComponent,
    AdatokListazasComponent,
    UjAdatFelvetelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
