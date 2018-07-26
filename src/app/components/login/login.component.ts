import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {

responseData: any;
userData = {"username": "", "password": ""};
divAccess = false;

constructor(private authService: AuthService, private router: Router) { }

login() {
  console.log('Hola login');
  if (this.userData.username  && this.userData.password) {
    this.authService.postData(this.userData, "login").then((result) => {
      this.responseData = result;
      if (this.responseData.userData) {
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.router.navigate(['home', this.responseData]);
      } else {
        this.divAccess = true;
      }
    });
  }
}


}
