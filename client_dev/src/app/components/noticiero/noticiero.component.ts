import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../services/comuneto/documento.service';
import { Router } from '@angular/router';
import { Noticias } from './noticias';
import * as moment from 'moment';

@Component({
  selector: 'app-noticiero',
  templateUrl: './noticiero.component.html',
  styleUrls: ['./noticiero.component.css'],
  providers: [Noticias]
})


export class NoticieroComponent implements OnInit {

  newspaper = [];
  images = [];
  body = [];
  url = '../assets/images/noticias/';
  id: number;

  constructor(
    // public _cv: Curriculum,
    public _documentoService: DocumentoService,
    public router: Router,
    public _newspaper: Noticias

  ) {
    this.images = [];
    this.body = [];
    this.url = '../assets/images/noticias/';
  }



  ngOnInit() {
    // console.log(this.noticieros);
    moment.locale('es');
    console.log(moment(this._newspaper.noticias[0].date, 'DD/MM/YYYY').format('LL'));
    // console.log(this._newspaper.noticias[0].images.img_first.img_title);
    for (let i = 0; i < this._newspaper.noticias.length; i++) {

      this.body.push( this._newspaper.noticias[i].body.split('.'));

    }
    // console.log(  this._newspaper.noticias[0].img);
  }


  obtenerNoticia(num: number) {
    // console.log( 'Mostrando id ',  num );

      this.id = num;
      this.images.push( this._newspaper.noticias[0].img);

      console.log(this.images);
    }

}
