import OFERTAS from './data/mock/ofertas.mock';
import { Oferta } from './shared/ofertas.model';

export class OfertasService {

  private ofertas: Array<Oferta> = OFERTAS;

  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }
}