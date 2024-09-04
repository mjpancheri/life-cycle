import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() onEditarItem = new EventEmitter();
  @Output() onRemoverItem = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  editarItem() {
    this.onEditarItem.emit(this.item);
  }

  checarItem() {
    this.item.comprado = !this.item.comprado;
  }

  removerItem() {
    this.onRemoverItem.emit(this.item);
  }
}
