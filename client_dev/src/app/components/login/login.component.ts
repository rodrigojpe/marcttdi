import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) {
    // this.usuario = null;
   }

  ngOnInit() {
  }

  ingresar( forma: NgForm) {

    if (forma.invalid) {
      return;
    }
    const usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario )
                        .subscribe( resp => this.router.navigate(['/noticia']) );
    // console.log(forma.valid);
    // console.log(forma.value);

  }


}
