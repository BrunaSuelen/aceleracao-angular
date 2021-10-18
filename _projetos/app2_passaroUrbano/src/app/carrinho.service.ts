import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/ofertas.model';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { URL_API } from './shared/app.api';
// import { Pedido } from './shared/pedido.model';

@Injectable()
class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirIten(oferta: Oferta): void {
    // this.itens.push(ofera)
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1,
      oferta.imagens[0]
    )
  }
}

export default CarrinhoService