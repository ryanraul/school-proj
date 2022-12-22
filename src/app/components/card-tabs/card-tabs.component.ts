import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface  ItemTab {
  id: number;
  titulo: string;
  url: string;
}

@Component({
  selector: 'app-card-tabs',
  templateUrl: './card-tabs.component.html',
  styleUrls: ['./card-tabs.component.scss']
})
export class CardTabsComponent implements OnInit {
  @Input() itensTab: Array<ItemTab> = [];
  @Output() tabSelecionadoEvent: EventEmitter<number> = new EventEmitter<number>();

  tabSelecionado = 1;

  constructor() { }

  ngOnInit() {
    
  }

  alterarTab(tabIndex) {
    this.tabSelecionado = tabIndex;
    this.tabSelecionadoEvent.emit(tabIndex);
  }

}
