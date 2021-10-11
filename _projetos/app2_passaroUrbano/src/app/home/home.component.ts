import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[];

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas)


    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
      .catch((param: any) => {
        console.log('a funcao resolve() foi resolvida depois de 3 segundos')
      })
  }
}
