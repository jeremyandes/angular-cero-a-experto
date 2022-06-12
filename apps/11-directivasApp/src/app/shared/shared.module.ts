import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPropertiesComponent } from './components/form-properties/form-properties.component';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    FormPropertiesComponent,
    ErrorMsgDirective,
    CustomIfDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormPropertiesComponent,
    ErrorMsgDirective,
    CustomIfDirective,
  ]
})
export class SharedModule { }
