import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/ofertas.model';

@Injectable()
class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1,
      oferta.imagens[0]
    )

    this.itens.push(itemCarrinho);
  }
}

export { CarrinhoService }