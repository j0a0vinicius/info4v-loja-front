import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule, DecimalPipe],
  templateUrl: './produto-detalhe.html',
  styleUrls: ['./produto-detalhe.css']
})
export class ProdutoDetalhe implements OnInit {
  produto?: Produto;
  private loja = inject(LojaService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.carregarProduto(id);
    }
  }

  private carregarProduto(id: number): void {
    this.loja.obterProduto(id).subscribe({
      next: (prod) => this.produto = prod,
      error: (err) => console.error('Erro ao carregar produto:', err)
    });
  }
}
