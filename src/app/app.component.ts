import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>;
  itemEmEdicao!: Item;

  constructor(private listaService: ListaDeCompraService) {}
  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  ngDoCheck(): void {
    this.listaService.persistirListaDeCompra();
  }

  editarItem(item: Item) {
    this.itemEmEdicao = item;
  }

  removerItem(item: Item) {
    if (confirm('Deseja realmente remover o item?')) {
      const index = this.listaDeCompra.findIndex((i) => i.id === item.id);
      this.listaDeCompra.splice(index, 1);
    }
  }

  limparLista() {
    if (confirm('Deseja realmente limpar a lista?')) {
      this.listaDeCompra = [];
      this.listaService.persistirListaDeCompra();
    }
  }
}
