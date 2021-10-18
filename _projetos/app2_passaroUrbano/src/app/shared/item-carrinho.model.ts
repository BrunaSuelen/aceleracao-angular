export class ItemCarrinho {
  constructor(
    public id: number,
    public titulo: string,
    public descricao_oferta: string,
    public valor: number,
    public quantidade: number,
    public img: object
  ) { }
}