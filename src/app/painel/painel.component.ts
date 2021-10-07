import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta!: string;
  public progresso: number = 0;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase)
  }

  ngOnInit(): void { }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    console.log(this.resposta)
  }

  public verificarResposta(): void {
    if (this.resposta && this.frasesIguais()) {
      this.rodada++;
      this.progresso += (100 / this.frases.length);
      this.rodadaFrase = this.frases[this.rodada];
      alert('A tradução está correta!')
      return
    }

    alert('A tradução está errada!')
  }

  private frasesIguais(): boolean {
    let frase = this.rodadaFrase.frasePtBr.split(' ').join('').toLocaleUpperCase();
    let resposta = this.resposta.split(' ').join('').toLocaleUpperCase()

    return frase == resposta
  }
}
