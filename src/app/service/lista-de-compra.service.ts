import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(
      localStorage.getItem('listaDeCompra') || '[]'
    );
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nome: string) {
    const novoItem: Item = {
      id: this.listaDeCompra.length + 1,
      nome: nome,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };

    this.listaDeCompra.push(novoItem);
  }

  editarItem(item: Item, novoNome: string) {
    item.nome = novoNome;
    item.data = new Date().toLocaleString('pt-BR');
    const index = this.listaDeCompra.findIndex((i) => i.id === item.id);
    this.listaDeCompra[index] = item;
  }

  persistirListaDeCompra() {
    localStorage.setItem('listaDeCompra', JSON.stringify(this.listaDeCompra));
  }
}
