import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PhotoServiceService } from 'src/app/services/stuff/photo-service.service';
import { Photo } from '../photo';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {


  filePaths: Array<string> = [];

  constructor(private photoService: PhotoServiceService
    ) { }

  ngOnInit(): void {
    this.photoService.getAll().subscribe(response => {
      this.filePaths = response;
    })
  }
  uploadPhoto(){
   
  }
}
