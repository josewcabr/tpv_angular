import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavTPVComponent } from './nav-tpv/nav-tpv.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { SellsComponent } from './sells/sells.component';
import { CustomersComponent } from './customers/customers.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TaxesComponent } from './taxes/taxes.component';
import { SearchBarComponent } from './sells/search-bar/search-bar.component';
import { ListPanelComponent } from './sells/list-panel/list-panel.component';
import { TotalPanelComponent } from './sells/total-panel/total-panel.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FetchApiService} from './services/fetch-api.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './services/products.service';
import { SelectionListComponent } from './sells/selection-list/selection-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTPVComponent,
    SellsComponent,
    CustomersComponent,
    StatisticsComponent,
    TaxesComponent,
    SearchBarComponent,
    ListPanelComponent,
    TotalPanelComponent,
    SelectionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [FetchApiService,
    ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
