import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimNG Modules
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TabMenuModule } from 'primeng/tabmenu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    ChartModule,
    TabMenuModule,
  ]
})
export class PrimengModule { }
