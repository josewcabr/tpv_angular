import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products';


@Component({
  selector: 'app-selectionlist',
  templateUrl: './selectionlist.component.html',
  styleUrls: ['./selectionlist.component.css']
})
export class SelectionlistComponent implements OnInit {
  clickEventSubscription: Subscription;

  @Input() products: Products[];

  constructor() {}

  ngOnInit(): void {

  }


}




