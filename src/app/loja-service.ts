import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produto } from './produto';

@Injectable({ providedIn: 'root' })
export class LojaService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/produtos';

  // Obter todos os produtos
  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url).pipe(
      catchError(err => {
        console.error('Erro ao obter produtos:', err);
        return throwError(() => err);
      })
    );
  }

  // Obter um produto específico pelo ID
  obterProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`).pipe(
      catchError(err => {
        console.error(`Erro ao obter produto ${id}:`, err);
        return throwError(() => err);
      })
    );
  }
}
