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

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string) {
    this.endereco = endereco;
    this.enderecoValido = this.endereco.length > 3;
    console.log(this.endereco);
  }

  atualizaNumero(numero: string) {
    this.numero = numero;
    this.numeroValido = this.numero.length > 0 ;
    console.log(this.numero);
  }

  atualizaComplemento(complemento: string) {
    this.complemento = complemento;
    this.complementoValido = this.complemento.length > 0;
    console.log(this.complemento);
  }

  atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoValido = this.formaPagamento.length > 0;
    console.log(this.formaPagamento);
  }

}
