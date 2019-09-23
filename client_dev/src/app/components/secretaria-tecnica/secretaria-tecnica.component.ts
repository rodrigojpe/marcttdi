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
          this.pais.push(this._cv.cv[2].datos_personales);
          this.pais.push(this._cv.cv[2].cargos_actuales.split('•'));

        //  console.log(this.pais);

          return this.pais;
    }

    // if ( name === 'marimar') {
    //       this.pais[2] = this._cv.cv[1];
    //       this.pais[3] = this._cv.cv[1].cargos_actuales.indexOf('•');

    //       // console.log(this._cv.cv[0].cargos_actuales.indexOf('•'));
    //       this.obtenerCurriculums();
    //       return this.pais;
    // }
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
