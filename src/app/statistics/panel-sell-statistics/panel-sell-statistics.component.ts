import {Component, Input, OnInit} from '@angular/core';
import {CompraRes} from '../../models/compra-res';
import {Products} from '../../models/products';

@Component({
  selector: 'app-panel-sell-statistics',
  templateUrl: './panel-sell-statistics.component.html',
  styleUrls: ['./panel-sell-statistics.component.css']
})
export class PanelSellStatisticsComponent implements OnInit {

  @Input()
  filteredCompras: CompraRes;

  @Input()
  productoSelected: Products;

  constructor() { }

  ngOnInit(): void {
  }

}
