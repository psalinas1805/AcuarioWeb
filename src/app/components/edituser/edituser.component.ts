import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario.interface';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html'
})
export class EditUserComponent implements OnInit {

usuario: Usuario = {
  username: "",
  password: "",
  nombre: "" ,
  apellido: "",
  email: "",
  telefono: "",
  direccion: "",
  comuna: "",
  ciudad:""
}

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
