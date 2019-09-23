import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { DocumentoService } from '../services/comuneto/documento.service';
import { Documento } from '../models/documento';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  forma: FormGroup;
  title: string;
  pdfs: any [];
  nombreLista: string;

  constructor(
    public _documentoService: DocumentoService,
    public router: Router
  ) {

    this.title = 'Crear Documento';
    this.pdfs = [];
  }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)});

      this.forma.setValue({
        nombre: 'test1 ',
        descripcion: 'test1'
      });
        this.obtenerPdfs();
        this.obtenerConveniosPdfs();
        this.obtenerDocumentosPdfs();
        this.obtenerInsumosGeneralesPdfs();
        this.obtenerInsumosGrupoPdfs();
        this.obtenerJusticiaJuvenilPdfs();
        this.obtenerNormativaInternacional();
        console.log(this.pdfs);
  }

  download(filename, name_folder) {
    console.log( filename );
    console.log(name_folder);
    // return false;

    this._documentoService.downloadFile( filename, name_folder )
    .subscribe(
      data => saveAs(data, filename),
      error => console.log(error)
      );
    }

    obtenerPdfs() {
      this._documentoService.obtenerNombresPdf()
      .subscribe( (resp: any) => {
        this.pdfs[0] = resp ;
        // console.log(this.pdfs);
        // console.log(resp);
        // this.router.navigate(['/login']);
      });
     }


   obtenerConveniosPdfs() {
    this._documentoService.obtenerConveniosPdf()
    .subscribe( (resp: any) => {
      this.pdfs[1] = resp;
      //  console.log(this.pdfs[1]);
      // console.log(resp);
    });
   }

   obtenerDocumentosPdfs() {
    this._documentoService.obtenerDocumentosPdf()
    .subscribe( (resp: any) => {
      this.pdfs[2]  = resp ;
      // console.log(resp);
      // console.log(resp);
    });
   }
   obtenerInsumosGeneralesPdfs() {
    this._documentoService.obtenerInsumosGeneralesPdf()
    .subscribe( (resp: any) => {
      this.pdfs[3] = resp;
      // console.log(resp);
      // console.log(resp);
    });
   }

   obtenerInsumosGrupoPdfs() {
    this._documentoService.obtenerInsumosGrupoPdf()
    .subscribe( (resp: any) => {
      this.pdfs[4] = resp ;
      // console.log(resp);
      // console.log(resp);
    });
   }

   obtenerJusticiaJuvenilPdfs() {
    this._documentoService.obtenerJusticiaJuvenilPdf()
    .subscribe( (resp: any) => {
      this.pdfs[5] = resp;
      // console.log(resp);
      // console.log(resp);
    });
   }

   obtenerNormativaInternacional() {
    this._documentoService.obtenerNormativaInternacionalPdf()
    .subscribe( (resp: any) => {
      this.pdfs[6] = resp;
      //  console.log(this.pdfs[1]);
      // console.log(resp);
    });
   }
}

