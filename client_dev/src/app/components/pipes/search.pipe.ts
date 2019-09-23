import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(values: any, term: any): any {

      // console.log('Mostrando pipe search');
      // console.log(term);
      if (term === undefined) {
        return values;
    }
      // return;
    if (term !== undefined ) {
      return values.filter(function(item) {
        return item.name.toLowerCase().includes(term.toLowerCase());
      });
    }




  }

}
