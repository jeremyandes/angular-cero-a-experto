import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SwitchesComponent } from './switches/switches.component';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule,
    SharedModule,
  ]
})
export class ReactiveModule { }
