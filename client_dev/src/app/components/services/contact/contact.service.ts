import { map } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../../config/config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  mensage: string;
  token: string;
  constructor(public http: HttpClient, public _router: Router, public _subirArchivoService: SubirArchivoService  ) {
    // this.mensage = 'Service ready';
    // console.log('Servicio de usuario listo');
  }

  sendEmailContact(contact: string) {
    console.log('llegando al services file');
    const body = {contact};
    return this.http.post(URL_SERVICE + '/contact/send', body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).pipe(map(res => res));

  }

}
