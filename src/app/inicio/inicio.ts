import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {
  produtos: Produto[] = [];
  loja = inject(LojaService);
  private router = inject(Router);
  idBusca?: number;

  ngOnInit(): void {
    this.loja.obterProdutos().subscribe({
      next: (dados) => this.produtos = dados,
      error: (erro) => console.error('Erro ao carregar produtos:', erro)
    });
  }

  buscarPorId(): void {
    if (this.idBusca != null && this.idBusca > 0) {
      this.router.navigate(['/produto', this.idBusca]);
    } else {
      alert('Digite um ID válido!');
    }
  }
}
