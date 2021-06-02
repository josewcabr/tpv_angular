import {Component, OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ClientsService} from '../services/clients.service';
import {CompraService} from '../services/compra.service';
import {ProductsService} from '../services/products.service';
import {Products} from '../models/products';
import {CompraRes} from '../models/compra-res';
import {PanelSeleccionProdEmergenteComponent} from './panel-seleccion-prod-emergente/panel-seleccion-prod-emergente.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit{

  listaProductos: Products[];

  comprasAll: CompraRes[];

  filteredProducts: Products[];

  filteredCompras: CompraRes[];

  selectedProd: Products;

  @ViewChild('panelprodemergente')
  panelprodemergente: PanelSeleccionProdEmergenteComponent;

  panelEmergente: boolean;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'buscarProd', cols: 1, rows: 1 },
          { title: 'estadisticasProd', cols: 3, rows: 4 }

        ];
      }

      return [
        { title: 'buscarProd', cols: 1, rows: 1 },
        { title: 'estadisticasProd', cols: 3, rows: 4 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private productService: ProductsService,
              private compraService: CompraService) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      res => {
        this.listaProductos = res;
      }
      ,
      err => console.error(err)
    );
    this.compraService.getCompra().subscribe(
      res => {
        this.comprasAll = res;
      }
      ,
      err => console.error(err)
    );
    this.panelEmergente = true;
  }

  procesarProductoSelect(pistaProd): void{
    this.filteredProducts = this.listaProductos.filter(p => p.name.toLowerCase().includes(pistaProd));
    this.panelprodemergente.panelSelect = false;
    this.panelEmergente = false;
  }

  procesarProdcuto(prod: Products): void{
    this.selectedProd = prod;
    this.filteredCompras = this.comprasAll.filter(c => c.producto.id === prod.id);
    this.panelEmergente = true;
  }

  cerraPanelEmergente(): void{
    this.panelEmergente = true;
  }



}
