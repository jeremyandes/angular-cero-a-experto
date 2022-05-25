import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { FormPropertiesComponent } from './form-properties/form-properties.component';



@NgModule({
  declarations: [
    SidemenuComponent,
    FormPropertiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidemenuComponent,
    FormPropertiesComponent,
  ]
})
export class SharedModule { }
