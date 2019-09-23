import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noticia'
})
export class NoticiaPipe implements PipeTransform {
  cuerpo: string;
  transform(value: any, args?: any): any {
    if (!value) {
      return;
    }


      // console.log('entrando al pipe' , value);
      this.cuerpo = value.split('.');
      // console.log('cuerpo del pipe' , this.cuerpo);
    return this.cuerpo;
  }

}
