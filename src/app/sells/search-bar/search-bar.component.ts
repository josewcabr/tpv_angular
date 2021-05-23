import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  value = '';
  public arrayProd: Products[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  cargarListaProd(): void{
    this.productsService.sendEvent();
  }



}
