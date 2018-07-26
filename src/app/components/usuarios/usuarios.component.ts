import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario } from '../../services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
     this.usuarios = this.authService.getUsers();
     console.log(this.usuarios);
  }

}
