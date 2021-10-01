import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import { AuthService } from 'src/app/services/security/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
 export class LoginPageComponent implements OnInit {
 
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage =! '';
  role: string = '';
 
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
 
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
    }
  }
 
  onSubmit(): void {
 
    this.authService.login(this.form).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().role;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
};