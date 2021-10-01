import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { GalleryModule } from '../gallery/gallery.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    SharedModule
  ],
  exports: [
    UserComponent
  ]
})
export class ProfileModule { }
