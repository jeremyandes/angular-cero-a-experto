import { NgModule } from '@angular/core';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
