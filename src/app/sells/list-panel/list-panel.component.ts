import { Component, OnInit } from '@angular/core';
import {FetchApiService} from '../../services/fetch-api.service';
import {ProductsService} from '../../services/products.service';
import {Subscription} from 'rxjs';
import {Products} from '../../models/products';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit {
  clickEventSubscription: Subscription;

  public products: Products[];

  constructor(private productsService: ProductsService) {
    this.clickEventSubscription = this.productsService.
      getProduct().
      subscribe(
        res => {
          this.products = res;
          },
        err => console.error(err)
    );
  }

  ngOnInit(): void {
  }




}
