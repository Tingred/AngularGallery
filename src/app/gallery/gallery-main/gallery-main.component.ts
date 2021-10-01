import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.css']
})
export class GalleryMainComponent implements OnInit {

  currentUser: any;
 
  constructor(private token: TokenStorageService) { }
 
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}