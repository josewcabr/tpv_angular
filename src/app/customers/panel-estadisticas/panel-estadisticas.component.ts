import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {Compra} from '../../models/compra';
import {CompraRes} from '../../models/compra-res';

@Component({
  selector: 'app-panel-estadisticas',
  templateUrl: './panel-estadisticas.component.html',
  styleUrls: ['./panel-estadisticas.component.css']
})
export class PanelEstadisticasComponent implements OnInit, OnChanges {

  @Input()
  cliente: Client;

  @Input()
  compras: CompraRes[];

  fechas: string[];

  panelNoClient: boolean;

  // array con numero de compras por mes
  datosCompra: number[];

  mesesConCero: string[];

  constructor() { }

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
          max: 10
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


  ngOnInit(): void {
    this.datosCompra = [];
    this.mesesConCero = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.panelNoClient = false;
    this.fechas = [];
  }



  actualizarDatosCompra(): void{
    this.datosCompra = [];
    if (this.compras !== undefined) {
      for (let i = 0; i < 12; i++) {
        let counter = 0;
        for (const compra of this.compras) {
          if (compra.date.split('-')[1] === this.mesesConCero[i]) {
            counter++;
          }
        }
        this.datosCompra.push(counter);
      }
      this.barChartData = [
        {data: this.datosCompra, label: this.cliente.name + ' ' + this.cliente.lastName, fill : false}
      ];
    }
  }

  ngOnChanges(): void {
    this.fechas = [];
    this.UniqueArray();
    this.actualizarDatosCompra();
  }

  UniqueArray(): void{
    if (this.compras !== undefined){
      for (let i = 0; i < this.compras.length; i++) {
        if (this.fechas.indexOf(this.compras[i].date) === -1) {
          this.fechas.push(this.compras[i].date);
        }
      }
      this.panelNoClient = true;
    }
  }

  calcularTotal(fecha: string): number{
    let sum = 0;
    for (let compra of this.compras){
      if (compra.date === fecha){
        sum += compra.producto.price * compra.amount;
      }
    }

    // Return mas IVA
    return sum * 1.21;
  }
}
