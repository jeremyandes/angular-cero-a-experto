import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimNG Modules
import { ChartModule } from 'primeng/chart';
import { TabMenuModule } from 'primeng/tabmenu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ChartModule,
    TabMenuModule,
  ]
})
export class PrimengModule { }
