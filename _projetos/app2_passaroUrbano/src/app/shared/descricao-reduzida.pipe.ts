import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

  transform(texto: string, inicarEm: number, trucarEm: number): string {
    return texto.length > trucarEm
      ? texto.substr(inicarEm, trucarEm) + '...'
      : texto;
  }

}