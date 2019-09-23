import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo( archivo: File, tipo: string, id: string ) {


    return new Promise((resolve, reject ) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

        formData.append('imagen', archivo, archivo.name );

        xhr.onreadystatechange = function () {

          if ( xhr.readyState === 4 ) {
              if ( xhr.status === 200 ) {
                  console.log( 'imagen subida');

                  resolve( JSON.parse(xhr.response ));
              } else {
                console.log('fallo la subida');
                reject( xhr.response );

              }
          }
        };

        let url = URL_SERVICE + '/upload/' + id;
        xhr.open('PUT', url, true );
        xhr.send( formData );

      });
    }
}
