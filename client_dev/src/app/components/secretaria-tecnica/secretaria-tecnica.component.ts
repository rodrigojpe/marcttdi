import { Component, OnInit } from '@angular/core';
import { Curriculum } from './cv';
import { Router } from '@angular/router';
import { DocumentoService } from '../services/comuneto/documento.service';


@Component({
  selector: 'app-secretaria-tecnica',
  templateUrl: './secretaria-tecnica.component.html',
  styleUrls: ['./secretaria-tecnica.component.css'],
  providers: [Curriculum]
})
export class SecretariaTecnicaComponent implements OnInit {

  nombre = [];
  pais = [];
  cv = [];
  body = [];
  constructor(
    public _cv: Curriculum,
    public _documentoService: DocumentoService,
    public router: Router ) {
    this.pais = [];
    this.cv = [];
    this.body = [];
    }

  ngOnInit() {

  }

  curriculum(name) {

    if ( name === 'RJ' ) {
          this.pais[0].push(this._cv.cv[2].datos_personales);
          this.pais[0].push(this._cv.cv[2].cargos_actuales.split('•'));

        //  console.log(this.pais);

          return this.pais[0];
    }

    if ( name === 'flaca') {
          this.pais[1].push(this._cv.cv[1].datos_personales);
          this.pais[1].push(this._cv.cv[1].cargos_actuales.split('•'));
          // console.log(this._cv.cv);
          // console.log(this._cv.cv[2].datos_personales);
          return  this.pais[1];
    }

    if ( name === 'fc') {
      this.pais[2].push(this._cv.cv[0].datos_personales);
      this.pais[2].push(this._cv.cv[0].cargos_actuales.split('•'));

      // console.log(this._cv.cv[0].cargos_actuales.indexOf('•'));
      return this.pais[2];
}
  }

  obtenerCurriculums() {
    this._documentoService.obtenerCurriculum()
    .subscribe( (resp: any) => {
      this.cv = resp;
      //  console.log(this.pdfs[1]);
       console.log(resp);
    });
   }
}
