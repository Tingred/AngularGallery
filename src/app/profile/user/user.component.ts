import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  currentUser: any;
 
  constructor(private token: TokenStorageService) { }
 
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}