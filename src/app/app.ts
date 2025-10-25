import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LojaService } from './loja-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected title = 'Loja';
  private loja = inject(LojaService);

  ngOnInit(): void {
    this.carregarProdutos();
  }

  private carregarProdutos(): void {
    this.loja.obterProdutos().subscribe({
      next: res => console.log('Produtos carregados no App:', res),
      error: err => console.error('Erro ao carregar produtos:', err)
    });
  }
}
