import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFix'
})
export class ArrayFixPipe implements PipeTransform {

 transform (value, args) {
    return Array.from(value);
  }

}

