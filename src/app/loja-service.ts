import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({ providedIn: 'root' })
export class LojaService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/produtos';

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  obterProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`);
  }
}
