import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [//TODO: componentes, pipes, directivas
    LoginPageComponent, RegisterFormComponent
  ],
  imports: [//TODO: Son otro modulos
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
