import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from "../../interfaces/usuario.interface";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: any;
  regiones: any;
  comunas: any;
  constructor(private usuarioService: UsuariosService, private router: Router) {


    this.usuarioService.getUsers('getUsers')
      .subscribe(data => {
        this.usuarios = data.userData;
        console.log(this.usuarios);
      });



  }

  ngOnInit() {

  }

  addUser() {
    this.router.navigate(['signup','nuevo']);
  }
  editUser(user_id) {
    this.router.navigate(['signup','user_id']);
  }



}
