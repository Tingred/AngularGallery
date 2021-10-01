import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryMainComponent } from './gallery/gallery-main/gallery-main.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { UserComponent } from './profile/user/user.component';
import { AboutComponent } from './shared/about/about.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { RegisterPageComponent } from './shared/register-page/register-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeMainComponent},
  {path: 'gallery', component: GalleryMainComponent},
  {path: 'profile', component: UserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
