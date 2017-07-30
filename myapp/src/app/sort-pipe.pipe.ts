import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (args === "asc") {
      return value.sort((a, b )=> a-b);
    } else if (args === "desc") {
      return value.sort((a, b )=> b-a);
    }

     return null;
  }

}
