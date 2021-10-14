import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      // Aciona o subscribe após 1000 milisegundos
      .pipe(debounceTime(1000))
      // Aciona o subscribe apenas se o valor enviado ser diferente do anterior
      .pipe(distinctUntilChanged())
      // Trata dado enviado e retorna valor tratado
      .pipe(switchMap((termo: string) => {
        console.log('pesquisa http', termo)
        return termo.trim() == ''
          ? of<Oferta[]>([])
          : this.ofertasService.pesquisaOfertas(termo)
      }))
      // Tratamento caso tenha error
      .pipe(catchError((erro: any) => {
        return of<Oferta[]>([])
      }))

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log('ofertas', ofertas)
    })
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa.trim())
    console.log('keyup', termoDaPesquisa)

    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (error: any) => console.log(error),
    //   () => console.log('Fluxo de eventos completo')
    // )
  }
}
