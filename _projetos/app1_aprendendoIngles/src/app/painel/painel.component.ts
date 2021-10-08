import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  public resposta: string = '';
  public progresso: number = 0;
  public rodada: number = 0;
  public rodadaFrase!: Frase;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.atualizaRodada();
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.resposta && this.frasesIguais()) {
      this.rodada++;
      this.progresso += (100 / this.frases.length);

      return this.rodada === this.frases.length
        ? this.encerrarJogo.emit('vitoria')
        : this.atualizaRodada();
    }

    this.tentativas--;
    this.tentativas === 0
      ? this.encerrarJogo.emit('derrota')
      : alert('A tradução está errada!');
  }

  private frasesIguais(): boolean {
    let frase = this.rodadaFrase.frasePtBr.split(' ').join('').toLocaleUpperCase();
    let resposta = this.resposta.split(' ').join('').toLocaleUpperCase()

    return frase == resposta
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
