import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  value = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  cargarListaProd(): void{
    this.productsService.sendEvent();
  }


}
