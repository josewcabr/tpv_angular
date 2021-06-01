import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CompraRes} from '../../models/compra-res';
import {Products} from '../../models/products';

@Component({
  selector: 'app-panel-sell-statistics',
  templateUrl: './panel-sell-statistics.component.html',
  styleUrls: ['./panel-sell-statistics.component.css']
})
export class PanelSellStatisticsComponent implements OnInit, OnChanges {

  @Input()
  filteredCompras: CompraRes[];

  @Input()
  productoSelected: Products;

  datosCompra: number[];

  mesesConCero: string[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 1,
          max: 30
        }
      }]
    }
  };
  public barChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Juilo', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public barChartType = 'line';
  public barChartLegend = true;
  barChartData = [
    {data: [], label: '', fill : false}
  ];

  constructor() { }

  ngOnInit(): void {
    this.datosCompra = [];
    this.mesesConCero = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  }

  ngOnChanges(): void {
    this.actualizarProd();
  }

  actualizarProd(): void{
    this.datosCompra = [];
    if (this.filteredCompras !== undefined) {
      for (let i = 0; i < 12; i++) {
        let counter = 0;
        for (const compra of this.filteredCompras) {
          if (compra.date.split('-')[1] === this.mesesConCero[i]) {
            counter++;
          }
        }
        this.datosCompra.push(counter);
      }
      this.barChartData = [
        {data: this.datosCompra, label: this.productoSelected.name, fill : false}
      ];
    }
  }

}
