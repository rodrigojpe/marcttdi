import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insumosG'
})
export class InsumosGPipe implements PipeTransform {

  transform(values: any, term: any): any {
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
