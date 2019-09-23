import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICE } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {


  transform( name: any ): any {

    let url = URL_SERVICE + '/file/';

    if (!name) {
      console.log('sin name', name);
      return url + '/usuarios/xxx';
    }
    const nombreCortado = name.split('/');
    let tipo = nombreCortado[0];
    // console.log(tipo.toLowerCase());

    // if ( img.indexOf('http') >= 0  ) {
    //  console.log('llegando al pipe');
    //   return img ;
    // }
    // console.log('nombre pipe: ', name);
    // console.log('tipo pipe' , tipo);
    // console.log(tipo);


    switch ( tipo.toLowerCase() ) {
      case 'acta':
        return url  + name;
      break;
      case 'convenios':
        return url + name;
      break;
      case 'documentos':
        return url +  name;
      break;
      case 'insumos generales':
        return url +  name;
      break;
      case 'insumos grupo':
        return url +  name;
      break;
      case 'justicia juvenil restaurativa':
        return url + name;
      break;
      default :
        console.log('no hay pdf');
        url +=  '/usuarios/xxx';
    }

    return url;
  }

}
