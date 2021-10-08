import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendendo Inglês';

  public jogoEmAndamento: boolean = true;
  public vitoria!: boolean;
  public conteudoDeEncerramento!: any;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.vitoria = tipo == 'vitoria';

    this.conteudoDeEncerramento = {
      mensagem: this.vitoria
        ? 'Parabêns!! Você acertou todas as traduções'
        : 'Fim de Jogo, infelizmente você perdeu! :(',
      color: this.vitoria
        ? 'green'
        : 'red'
    }
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
  }
}
