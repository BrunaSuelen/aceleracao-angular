import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string) {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;

    this.enderecoValido = this.endereco.length > 0;
    console.log(this.endereco);
  }

  atualizaNumero(numero: string) {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;

    this.numeroValido = this.numero.length > 0 ;
    console.log(this.numero);
  }

  atualizaComplemento(complemento: string) {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;

    this.complementoValido = this.complemento.length > 0;
    console.log(this.complemento);
  }

  atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;

    this.formaPagamentoValido = this.formaPagamento.length > 0;
    console.log(this.formaPagamento);
  }

}
