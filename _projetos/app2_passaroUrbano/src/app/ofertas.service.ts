import { Oferta } from './shared/ofertas.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from './shared/app.api';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.shift())
  }

  public getComoUsarPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.shift().descricao
      })
  }

  public getOndeFicaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.shift().descricao
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http
      .get<Oferta[]>(`${URL_API}ofertas?descricao_oferta_like=${termo}`)
      // Efetua 10 tentativas de conexão
      .pipe(retry(10))
      .pipe(map((resposta) => resposta))
  }
}