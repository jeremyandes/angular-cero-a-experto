import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPropertiesComponent } from './form-properties/form-properties.component';



@NgModule({
  declarations: [
    FormPropertiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormPropertiesComponent,
  ]
})
export class SharedModule { }
