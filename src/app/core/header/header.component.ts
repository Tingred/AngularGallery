import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private role: string = '';
  isLoggedIn = false;
  showAdminBoard = false;
  username: string = '';
  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService) { }
 
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
 
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
 
      this.showAdminBoard = this.role.includes('ROLE_ADMIN');
      this.username = user.username;
    }
    this.currentUser = this.tokenStorageService.getUser();
    
  }
 
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}