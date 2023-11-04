import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {AjouterProduitComponent} from './components/products/ajouter-produit/ajouter-produit.component';
import {EditProductComponent} from './components/products/edit-product/edit-product.component';

const routes: Routes = [
  {path : 'products', component : ProductsComponent
  },
  {path : 'nouvel-ajout', component : AjouterProduitComponent
  },
  {path : 'modifierProduit/:id', component : EditProductComponent
  },
  {path : '', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
