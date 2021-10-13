import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaPesquisa: string): void {
    console.log(termoDaPesquisa)
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa)
    // console.log(this.ofertas)

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    )
  }
}
