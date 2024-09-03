import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [
    {
      id: 1,
      nome: 'Queijo prato',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 2,
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 3,
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: true,
    },
  ];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
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
}
