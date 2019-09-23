import { Injectable } from '@angular/core';
import { HttpClient, HttpUrlEncodingCodec, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Usuario } from '../../models/usuario.model';
import { URL_SERVICE } from '../../config/config';

import { map } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  mensage: string;
  token: string;
  usuario: Usuario;
  constructor(public http: HttpClient, public _router: Router ) {
    // this.mensage = 'Service ready';
    // console.log('Servicio de usuario listo');
    //  this.cargarStorage();
  }

  estaLogeado() {

    return ( this.token.length > 5 ) ? true : false;
  }

  logout() {
    // this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this._router.navigate(['/login']);
    localStorage.clear();

  }

//   cargarStorage() {
//     if ( localStorage.getItem('token') ) {
//       this.token = localStorage.getItem('token');
//       this.usuario = JSON.parse(localStorage.getItem('usuario'));

//     } else {
//       this.token = '';
//       this.usuario = null;
//     }
//   }

  guardarStorage(id: string,  token: string, usuario: Usuario ) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;

  }




  login(usuario: Usuario) {

    const url = URL_SERVICE + '/login';
    return this.http.post(url, usuario)
                    .pipe(map((resp: any) => {
                      this.guardarStorage(resp.id, resp.token, resp.usuario);
                      return true;
                    }));
  }



  ingresar( usuario: Usuario, recuerdame: boolean = false   ) {

    const url = URL_SERVICE + '/login';

    if ( recuerdame ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    // return this.http.post( url , usuario )
    //                 .pipe(map( (resp: any) => {
    //                     console.log(resp);
    //                     this.guardarStorage(resp.id, resp.token, resp.usuario);
    //                      return true;
    //                 }));
  }
}
