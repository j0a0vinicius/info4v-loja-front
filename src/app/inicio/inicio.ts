import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Import necessário
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- Adicione RouterModule aqui
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {
  produtos: Produto[] = [];
  loja = inject(LojaService);

  ngOnInit(): void {
    this.loja.obterProdutos().subscribe({
      next: (dados) => this.produtos = dados,
      error: (erro) => console.error('Erro ao carregar produtos:', erro)
    });
  }
}