import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class PaisesModule { }
