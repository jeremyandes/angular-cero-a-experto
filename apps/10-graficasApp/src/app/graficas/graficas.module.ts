import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { PrimengModule } from '../primeng/primeng.module';
import { GraficaDonaComponent } from './components/grafica-dona/grafica-dona.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
    GraficaDonaComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    PrimengModule,
  ]
})
export class GraficasModule { }
