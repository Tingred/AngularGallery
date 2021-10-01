import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/services/stuff/photo-service.service';
import { FormControl, FormBuilder } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})


export class UploadPhotoComponent implements OnInit {

    constructor(
      private photoService: PhotoServiceService
  ) { }

  message: any;
  selectedFile: any;
  uuid: any;
  pathToFile: any;
  
  
  private logo:any;

  ngOnInit(): void {
    
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  public getImage() {
    this.photoService.getOneByUuid(this.uuid).subscribe(res => {
      this.pathToFile = res;
      console.log(res);
    })
  }
  
  public onUpload() {
    this.photoService.uploadPhoto(this.selectedFile).subscribe(response => {
      this.message = response;
    });
  }


}