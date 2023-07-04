import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {AjouterProduitComponent} from './components/ajouter-produit/ajouter-produit.component';

const routes: Routes = [
  {path : 'products', component : ProductsComponent},
  {path : 'nouvel-ajout', component : AjouterProduitComponent},
  {path : '', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
