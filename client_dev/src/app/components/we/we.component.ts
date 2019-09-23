import { Component, OnInit } from '@angular/core';
import { Curriculum } from './cv';
import { DocumentoService } from '../services/comuneto/documento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-we',
  templateUrl: './we.component.html',
  styleUrls: ['./we.component.css'],
  providers : [Curriculum]
})
export class WeComponent implements OnInit {

  nombre: boolean;
  pais = [];
  cv = [];
  body = [];
  constructor(public _cv: Curriculum,
    public _documentoService: DocumentoService,
    public router: Router ) {
    this.nombre = false;
    this.pais = [];
    this.cv = [];
    this.body = [];
  }


  ngOnInit() {
    // this.cabecera[0] = this._cv.cv[0];
    // console.log(this.cabecera[0]);
    // this.body.push(this._cv.cv[0].cargos_actuales.split('•'));
    // console.log(this.body);
    this.obtenerCurriculums();
  }

  curriculum(name) {

    if ( name === 'fc' ) {
          this.nombre = true;
          this.pais.push(this._cv.cv[0].datos_personales);
          this.pais.push(this._cv.cv[0].cargos_actuales.split('•'));

         console.log(this.pais);

          return this.pais;
    }

    if ( name === 'marimar') {
          this.nombre = true;
          this.pais[2] = this._cv.cv[1];
          this.pais[3] = this._cv.cv[1].cargos_actuales.indexOf('•');

          // console.log(this._cv.cv[0].cargos_actuales.indexOf('•'));
          this.obtenerCurriculums();
          return this.pais;
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
