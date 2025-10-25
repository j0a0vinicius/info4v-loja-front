import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-detalhe.html',
  styleUrls: ['./produto-detalhe.css']
})
export class ProdutoDetalhe implements OnInit {
  produto?: Produto;
  private loja = inject(LojaService);
  private route = inject(ActivatedRoute);

ngOnInit(): void {
  const id = +this.route.snapshot.paramMap.get('id')!;
  this.loja.obterProduto(id).subscribe(prod => {
    this.produto = prod; // agora o objeto terá descricao
  });
}

  
}
