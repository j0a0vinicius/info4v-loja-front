import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private APIURL = 'http://localhost:3000'
  private http = inject(HttpClient)

  obterProdutos(): Observable<any> {
    return this.http.get<any>(`${this.APIURL}/produtos`)
  }

  obterProdutoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.APIURL}/produtos/${id}`)

  }
}
