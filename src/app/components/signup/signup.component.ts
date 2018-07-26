import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario, AuthService } from "../../services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class SignupComponent implements OnInit {
  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: "pablo",
      apellido: "salinas"
    },
    correo: "pablo@gmial.com"
  };

  paises = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ];

  constructor(authService: AuthService) {

    console.log(this.usuario);
    
    this.forma = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellido: new FormControl("", [Validators.required]),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ])
    });
  }

  ngOnInit() {}

  guardar() {
    // console.log("agregar usuario");
    console.log("NgForm ", this.forma);
    // console.log("valor", forma.value);
    // console.log("Usuario", this.forma);
  }
}
