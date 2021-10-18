import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: number;

  public pedido: Pedido = new Pedido('', '', '', '');

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido!: boolean;
  public numeroValido!: boolean;
  public complementoValido!: boolean;
  public formaPagamentoValido!: boolean;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  public formEstado: boolean = true;

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string) {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;

    this.enderecoValido = this.endereco.length > 0;
    console.log(this.endereco);
    this.habilitarForm();
  }

  public atualizaNumero(numero: string) {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;

    this.numeroValido = this.numero.length > 0;
    console.log(this.numero);
    this.habilitarForm();
  }

  public atualizaComplemento(complemento: string) {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;

    this.complementoValido = this.complemento.length > 0;
    console.log(this.complemento);
    this.habilitarForm();
  }

  public atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;

    this.formaPagamentoValido = this.formaPagamento.length > 0;
    console.log(this.formaPagamento);
    this.habilitarForm();
  }

  public habilitarForm(): void {
    this.formEstado = !(this.enderecoValido && this.numeroValido && this.complementoValido && this.formaPagamentoValido)
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido).subscribe((idPedido: number) => {
      console.log(idPedido)
      this.idPedidoCompra = idPedido;
    })
  }
}
