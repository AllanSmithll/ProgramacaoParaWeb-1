import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matricula'
})
export class MatriculaPipe implements PipeTransform {

  transform(matricula: string): string {
    // 2022.1.37-0018
    if(matricula.length != 11) {
      return matricula;
    }
    return `${matricula.substring(0, 4)}.${matricula.substring(4, 5)}.${matricula.substring(5, 7)}-${matricula.substring(7, 11)}`;
  }

}
