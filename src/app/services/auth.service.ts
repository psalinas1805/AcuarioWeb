import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

const apiUrl = 'http://happypez.tk/AuthServices/api/index.php/';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  
  private usuarios: Usuario[] = [];
  constructor(public http: Http) {
    console.log("Hello AuthService");
  }

  postData(credenciales, type) {
   
   console.log(credenciales);
   
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + type, JSON.stringify(credenciales), { headers: headers })
        .subscribe(
          (data: any ) => {         
            resolve(data.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getUsers() {
    console.log('usuarios');
    return(this.usuarios);
  }



}

export interface Usuario {
  user_id: number;
  idacuario: number;
  nomacuario: string;
  name: string;
  token: string;
}
