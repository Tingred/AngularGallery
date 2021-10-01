import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { PhotoComponent } from './photo/photo.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { FormsModule } from '@angular/forms';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    PhotoViewComponent,
    PhotoComponent,
    UploadPhotoComponent,
    GalleryMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    PhotoComponent,
    PhotoViewComponent,
    UploadPhotoComponent,
    GalleryMainComponent
  ]
})
export class GalleryModule { }
