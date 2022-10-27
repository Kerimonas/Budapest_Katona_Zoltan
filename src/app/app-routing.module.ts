import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatokListazasComponent } from './adatok-listazas/adatok-listazas.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';
import { UjAdatFelvetelComponent } from './uj-adat-felvetel/uj-adat-felvetel.component';

const routes: Routes = [
  { path: '', component: NyitoOldalComponent},
  { path: 'adatok', component: AdatokListazasComponent},
  { path: 'ujadat', component: UjAdatFelvetelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
