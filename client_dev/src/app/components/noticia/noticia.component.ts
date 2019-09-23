import { Component, ViewChild } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent  {
  ckeditorContent: String  = '<b>probando contenidos</b>';
  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface


}
