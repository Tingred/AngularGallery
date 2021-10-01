import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryModule } from './gallery/gallery.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';
import { AuthInterceptor, authInterceptorProviders } from './services/security/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ProfileModule,
    HomeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

