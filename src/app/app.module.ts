import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppareilComponent } from './appareil/appareil.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AjouterProduitComponent } from './components/products/ajouter-produit/ajouter-produit.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {productReducer} from './ngrx/products.reducer';
import {ProductEffects} from './ngrx/products.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import {ProductEffectsTest} from './ngrx/productstest.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    AppareilComponent,
    AjouterProduitComponent,
    ProductsNavBarComponent,
    ListProductsComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    StoreModule.forRoot({productState: productReducer}),
    EffectsModule.forRoot([ProductEffects,ProductEffectsTest]),
    StoreDevtoolsModule.instrument({}),
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatStepperModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
