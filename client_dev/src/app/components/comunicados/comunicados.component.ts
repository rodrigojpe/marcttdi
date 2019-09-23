import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../services/subirArchivo/subir-archivo.service';
import { DocumentoService } from '../services/comuneto/documento.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.css']
})
export class ComunicadosComponent implements OnInit {
  comunicados: any [];
  constructor(public http: HttpClient, public _router: Router, public _documentoService: DocumentoService ) {
    this.comunicados = [];
   }

  ngOnInit() {
    this.comunicadosPdf();
  }

  comunicadosPdf() {
    this._documentoService.obtenerComunicados()
    .subscribe( (resp: any) => {
      this.comunicados[0] = resp;
      // console.log(this.pdfs);
       console.log(resp);
      // this.router.navigate(['/login']);
    });
   }

}
