import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPropertiesComponent } from './components/form-properties/form-properties.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    FormPropertiesComponent,
    ErrorMsgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormPropertiesComponent,
    ErrorMsgDirective,
  ]
})
export class SharedModule { }
