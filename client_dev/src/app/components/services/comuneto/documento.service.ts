import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Documento } from '../../models/documento';
import { URL_SERVICE } from '../../config/config';

import { map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  mensage: string;
  token: string;
  documento: Documento;
  constructor(public http: HttpClient, public _router: Router, public _subirArchivoService: SubirArchivoService  ) {
    // this.mensage = 'Service ready';
    // console.log('Servicio de usuario listo');
  }

  downloadFile(file: string, nameFolder: string) {
    console.log('llegando al services file');
    const body = {filename: file, folder: nameFolder};
    return this.http.post(URL_SERVICE + '/doc/download', body, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }


  obtenerNombresPdf() {

    const url = URL_SERVICE + '/doc/todos' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
             return resp.data;
      }));
  }


  obtenerConveniosPdf() {


    const url = URL_SERVICE + '/doc/convenios' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            // console.log(resp);
            return resp.data;
      }));
  }
  obtenerDocumentosPdf() {

    const url = URL_SERVICE + '/doc/documentos' ;
    return this.http.get( url )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }
  obtenerInsumosGeneralesPdf() {

    const url = URL_SERVICE + '/doc/insumosg' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }
  obtenerInsumosGrupoPdf() {

    const url = URL_SERVICE + '/doc/insumogrupo' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }
  obtenerJusticiaJuvenilPdf() {

    const url = URL_SERVICE + '/doc/jjuvenil' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }

  obtenerNormativaInternacionalPdf() {

    const url = URL_SERVICE + '/doc/normativaI' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }

  obtenerComunicados() {

    const url = URL_SERVICE + '/doc/comunicados' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }


  obtenerCurriculum() {
    const url = URL_SERVICE + '/doc/curriculum' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }
  obtenerNoticias() {
    const url = URL_SERVICE + '/doc/noticias' ;
    return this.http.get( url  )
    .pipe(map( (resp: any) => {
            //  console.log(resp);
            return resp.data;
      }));
  }

}
