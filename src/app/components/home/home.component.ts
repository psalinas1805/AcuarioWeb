import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

userDetails: any;
userPostData = {"user_id": "", "token": ""};
responseChartData: any;  
dataSet: any;

  constructor(private authService: AuthService, private router: Router) { 
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    console.log(data);
    
  }

  ngOnInit() {
    this.getData();
    // this.usuarios = this.authService.getUsers();
    // console.log(this.heroes);
  }

  getData() {
  this.authService.postData(this.userPostData, 'chartTempPh').then((result) =>{
    this.responseChartData = result;
    if (this.responseChartData.chartData) {
      this.dataSet = this.responseChartData.chartData;
      console.log(this.dataSet);
    } else {
      console.log('No access on getData');
      
    }

  });
  }
  



}
