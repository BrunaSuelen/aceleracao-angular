import { Component, Input, OnInit } from '@angular/core';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-toast-pedido-sucesso',
  templateUrl: './toast-pedido-sucesso.component.html',
  styleUrls: ['./toast-pedido-sucesso.component.css']
})
export class ToastPedidoSucessoComponent implements OnInit {

  @Input() public oferta!: Oferta;
  @Input() public exibirToast!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
