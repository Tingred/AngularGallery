import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { authInterceptorProviders } from '../services/security/auth.interceptor';
import { UnloggedComponent } from './unlogged/unlogged.component';



@NgModule({
  declarations: [
    ButtonComponent,
    AboutComponent,
    RegisterPageComponent,
    LoginPageComponent,
    UnloggedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    AboutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UnloggedComponent
  ],
  providers:[] })
export class SharedModule { }
