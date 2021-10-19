import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta;
  public pedido!: Oferta;
  public exibirToast!: boolean;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.carrinhoService.exibirItens();
    this.route.params.subscribe((parametros: Params) => {
      console.log(parametros)
      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        })
    });

    // this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    //   .then((oferta: Oferta) => {
    //     this.oferta = oferta;
    //   })
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
    this.exibirToast = true;
    setTimeout(() => this.exibirToast = false, 50000);
  }
}
