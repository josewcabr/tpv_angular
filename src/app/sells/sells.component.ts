import {Component, Input, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ProductsService} from '../services/products.service';
import {Products} from '../models/products';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.css']
})
export class SellsComponent implements OnInit{
  public products: Products[];
  public filteredProducts: Products[];
  clickEventSubscription: Subscription;
  public panelSeleccion: boolean;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'search_panel', cols: 1, rows: 1 },
          { title: 'total_panel', cols: 1, rows: 1 },
          { title: 'list_panel', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'search_panel', cols: 4, rows: 1 },
        { title: 'total_panel', cols: 2, rows: 5 },
        { title: 'list_panel', cols: 4, rows: 4 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.panelSeleccion = true;
    this.productsService.getProduct().subscribe(
      res => {
        this.products = res;
      }
      ,
      err => console.error(err));
  }

  procesarPistaBuscar(pista): void{
    this.filteredProducts = this.products.filter(prod => prod.name.toLowerCase().includes(pista));

    this.panelSeleccion = false;
    console.log(this.filteredProducts);
  }


}
