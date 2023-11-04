import { Injectable } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Action, ActionsSubject} from '@ngrx/store';
import {createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {
  AjouterProductsAction, AjouterProductsActionSucess, EnregistrerProductsActionERROR, EnregistrerProductsActionSucess,
  GetAllProductsActionERROR,
  GetAllProductsActionSucess,
  GetAllSearchProductsAction,
  GetAllSearchProductsActionERROR,
  GetAllSearchProductsActionSucess,
  GetAllSelectedProductsActionERROR,
  GetAllSelectedProductsActionSucess, ModifierProductsActionERROR, ModifierProductsActionSucess,
  ProductsActions,
  ProductsActionsTypes,
  SelectionProductsActionERROR,
  SelectionProductsActionSucess,
  SupressionProductsActionERROR,
  SupressionProductsActionSucess, UpdateProductsActionERROR, UpdateProductsActionSucess
} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
@Injectable()
export class ProductEffectsTest {constructor(
  private effectsActions: ActionsSubject,
  private productService: ProductsService
) {}

//   getAllProductsEffects:Observable<Action>= createEffect  (
//     ()=>
//   this.effectsActions.pipe(
//     ofType(ProductsActionsTypes.TOUT_LES_PRODUITS),
//     mergeMap((action) =>
//     { return this.productService.getAllProducts().pipe(
//       map(products =>new GetAllProductsActionSucess(products))
//     )
// })
// )
// );

  /**
   * Liste des Produits
   */


  getAllProductsEffects:Observable<Action>= createEffect  (
    ()=>
  this.effectsActions.pipe(
    ofType(ProductsActionsTypes.TOUT_LES_PRODUITS),
    mergeMap((action) =>
    { return this.productService.getAllProducts().pipe(
      map(products =>new GetAllProductsActionSucess(products)),
      catchError(err => of(new GetAllProductsActionERROR(err.message))))
})
)
);

  /**
   * Produits selectionnés
   */

  getAllSelectedProductsEffects:Observable<Action>= createEffect  (
    ()=>
  this.effectsActions.pipe(
    ofType(ProductsActionsTypes.TOUT_LES_PRODUITS_SELECTIONNES),
    mergeMap((action: ProductsActions) =>
    { return this.productService.getAllGetSelectedProducts().pipe(
      map(products =>new GetAllSelectedProductsActionSucess(products)),
      catchError(err => of(new GetAllSelectedProductsActionERROR(err.message))))
})
)
);

  /**
   * REcherche des Produits effects
   */
  getAllSearchProductsEffects:Observable<Action>= createEffect  (
    ()=>
  this.effectsActions.pipe(
    ofType(ProductsActionsTypes.TOUT_LES_PRODUITS_RECHERCHES),
    mergeMap((action: ProductsActions) =>
    { return this.productService.searchProducts(action.payload).pipe(
      map(products =>new GetAllSearchProductsActionSucess(products)),
      catchError(err => of(new GetAllSearchProductsActionERROR(err.message))))
})
)
);


  /**
   * Selection d' un Produit effects
   */
  selectionProductsEffects:Observable<Action>= createEffect  (
    ()=>

  this.effectsActions.pipe(
    ofType(ProductsActionsTypes.SELECT_PRODUITS),
    mergeMap((action: ProductsActions) =>
    { return this.productService.select(action.payload).pipe(
      map(product =>new SelectionProductsActionSucess(product)),
      catchError(err => of(new SelectionProductsActionERROR(err.message))))
})
)
);

  /**
   * REcherche des Produits effects
   */
  suppressionProductsEffects:Observable<Action>= createEffect  (
    ()=>
      this.effectsActions.pipe(
        ofType(ProductsActionsTypes.SUPPRIMER_PRODUITS),
        mergeMap((action: ProductsActions) =>
        { return this.productService.supprimer(action.payload.id).pipe(
          map(products =>new SupressionProductsActionSucess(action.payload)),
          catchError(err => of(new SupressionProductsActionERROR(err.message))))
        })
      )
  );
/**
   * Ajouter Produits effects
   */
 ajouterProductsEffects:Observable<Action>= createEffect  (
    ()=>
      this.effectsActions.pipe(
        ofType(ProductsActionsTypes.AJOUTER_PRODUITS),
        map((action: ProductsActions) =>
        { return new AjouterProductsActionSucess({});
        })
      )
  );

 /**
   * Enregistrer Produits effects
   */
 enregistrerProductsEffects:Observable<Action>= createEffect  (
    ()=>
      this.effectsActions.pipe(
        ofType(ProductsActionsTypes.ENREGISTRER_PRODUITS),
        mergeMap((action: ProductsActions) =>
          /**
           * Retour seulement du produit
           * @param action
           */
        { return this.productService.save(action.payload).pipe(
          /**
           * L map me retourne le produit
           */

          map(products =>new EnregistrerProductsActionSucess(products)),

          catchError(err => of(new EnregistrerProductsActionERROR(err.message))))
        })
      )
  );

 /**
   * Modifier Produits effects
   */
 modfifierProductsEffects:Observable<Action>= createEffect  (
    ()=>
      this.effectsActions.pipe(
        ofType(ProductsActionsTypes.MODIFIER_PRODUITS),
        mergeMap((action: ProductsActions) =>
          /**
           * Retour seulement du produit
           * @param action
           */
        { return this.productService.getProductById(action.payload).pipe(
          /**
           * L map me retourne le produit
           */
          map(products =>new ModifierProductsActionSucess(products)),
          catchError(err => of(new ModifierProductsActionERROR(err.message))))
        })
      )
  );

 /**
   * Modifier Produits effects
   */

 updateProductsEffects:Observable<Action>= createEffect  (
    ()=>
      this.effectsActions.pipe(
        ofType(ProductsActionsTypes.UPDATE_PRODUITS),
        mergeMap((action: ProductsActions) =>
        { return this.productService.update(action.payload).pipe(
          /**
           * L map me retourne le produit
           */
          map(products =>new UpdateProductsActionSucess(products)),
          catchError(err => of(new UpdateProductsActionERROR(err.message))))
        })
      )
  );





}
