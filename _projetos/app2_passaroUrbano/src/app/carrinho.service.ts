import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/ofertas.model';

@Injectable()
class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  constructor(private http: HttpClient) { }

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

    this.adicionarQuantidade(itemCarrinho);
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0;

    this.itens.map((item: ItemCarrinho) => {
      total += item.valor * item.quantidade
    })

    return total;
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens
      .find((item: ItemCarrinho) => item.id == itemCarrinho.id);

    itemCarrinhoEncontrado
      ? itemCarrinhoEncontrado.quantidade += 1
      : this.itens.push(itemCarrinho);
  }

  public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens
      .find((item: ItemCarrinho) => item.id == itemCarrinho.id);

    if (itemCarrinhoEncontrado) {
      if (itemCarrinho.quantidade == 1) {
        let indiceItemCarrinhoEncontrado = this.itens.indexOf(itemCarrinhoEncontrado)
        this.itens.splice(indiceItemCarrinhoEncontrado, 1);
        return;
      }

      itemCarrinhoEncontrado.quantidade -= 1;
    }
  }
}

export { CarrinhoService }