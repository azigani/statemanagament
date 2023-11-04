import {Action} from '@ngrx/store';
import {Products} from '../models/products';

export enum ProductsActionsTypes{
  TOUT_LES_PRODUITS="[Products] Obtenir la liste des produits",
  TOUT_LES_PRODUITS_REUSSI="[Products] Obtenir la liste des produits réusssi",
  TOUT_LES_PRODUITS_ERROR="[Products] Erreur lors de l\'Obtention de la liste des produits ",
  /**
   * Obtenir la liste des produits selectionnés
   */
  TOUT_LES_PRODUITS_SELECTIONNES="[Products] Obtenir la liste des produits selectionnés",
  TOUT_LES_PRODUITS_SELECTIONNES_REUSSI="[Products] Obtenir la liste des produits selectionnés réusssi",
  TOUT_LES_PRODUITS_SELECTIONNES_ERROR="[Products] Erreur lors de l\'Obtention de la liste des produits selectionnés",

  /**
   * Obtenir la liste des produits recherchés
   */
  TOUT_LES_PRODUITS_RECHERCHES="[Products] Obtenir la liste des produits recherchés",
  TOUT_LES_PRODUITS__RECHERCHE_REUSSI="[Products] Obtenir la liste des produits recherchés réusssi",
  TOUT_LES_PRODUITS__RECHERCHES_ERROR="[Products] Erreur lors de l\'Obtention de la liste des produits recherchés",

  /**
   * Selectionner un produit
   */
  SELECT_PRODUITS="[Products] Selection du produit",
  SELECT_PRODUITS_REUSSI="[Products] Selection du produit réusssi",
  SELECT_PRODUITS_ERROR="[Products] Erreur lors de la selection du produit",

  /**
   * Supprimer  un produit
   */
  SUPPRIMER_PRODUITS="[Products] Suppression du produit",
  SUPPRIMER_PRODUITS_REUSSI="[Products] Produit supprimé avec succès",
  SUPPRIMER_PRODUITS_ERROR="[Products] Erreur lors de la suppresion  du produit",


  /**
  Ajoute   un produit
   */
 AJOUTER_PRODUITS="[Products] Ajout du produit",
  AJOUTER_PRODUITS_REUSSI="[Products] Produit ajouté avec succès",
  AJOUTER_PRODUITS_ERROR="[Products] Erreur lors de l'ajout  du produit",

/**
 ENREGISTRER   un produit
   */
ENREGISTRER_PRODUITS="[Products] Enregistrer un  produit",
  ENREGISTRER_PRODUITS_REUSSI="[Products] Enregistrement avec succès",
  ENREGISTRER_PRODUITS_ERROR="[Products] Erreur lors de l'enregistrement",

/**
 MODIFIER   un produit
   */
MODIFIER_PRODUITS="[Products] Modifier un  produit",
  MODIFIER_PRODUITS_REUSSI="[Products] Modifié avec succès",
  MODIFIER_PRODUITS_ERROR="[Products] Erreur lors de la modification",

/**
 UPDATE   un produit
   */
UPDATE_PRODUITS="[Products] Update un  produit",
  UPDATE_PRODUITS_REUSSI="[Products] update avec succès",
  UPDATE_PRODUITS_ERROR="[Products] Erreur lors du update",

}

/**
 * Liste des produits
 */
export  class GetAllProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.TOUT_LES_PRODUITS;

  constructor(public payload: any) {

  }
}
  export class GetAllProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.TOUT_LES_PRODUITS_REUSSI;
  constructor(public payload:Products[]){

  }

}

export class GetAllProductsActionERROR implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.TOUT_LES_PRODUITS_ERROR;

  constructor(public payload: string) {
  }
}
/**
 * Liste des produits  selectionnés
 */

export  class GetAllSelectedProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.TOUT_LES_PRODUITS_SELECTIONNES;

  constructor(public payload: any) {

  }
}
  export class GetAllSelectedProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.TOUT_LES_PRODUITS_SELECTIONNES_REUSSI;
  constructor(public payload:Products[]){

  }

}

export class GetAllSelectedProductsActionERROR implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.TOUT_LES_PRODUITS_SELECTIONNES_ERROR;
  constructor(public payload:string){
  }

}

/**
 * Rechercher des produits
 */

export  class GetAllSearchProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.TOUT_LES_PRODUITS_RECHERCHES;

  constructor(public payload: any) {

  }
}
  export class GetAllSearchProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.TOUT_LES_PRODUITS__RECHERCHE_REUSSI;
  constructor(public payload:Products[]){

  }

}

export class GetAllSearchProductsActionERROR implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.TOUT_LES_PRODUITS__RECHERCHES_ERROR;

  constructor(public payload: string) {
  }
}

  /**
 * Selectionner des produits
 */

export  class SelectionProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUITS;

  constructor(public payload: Products) {

  }
}

//Pour ce cas ci  il faut juste le produit selectionné

  export class SelectionProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUITS_REUSSI;
  constructor(public payload:Products){

  }

}

export class SelectionProductsActionERROR implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUITS_ERROR;
  constructor(public payload:string){
  }

}

  /**
 * Supprimer  produits
 */

export  class SupressionProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SUPPRIMER_PRODUITS;

  constructor(public payload: Products) {

  }
}

  export class SupressionProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SUPPRIMER_PRODUITS_REUSSI;
  constructor(public payload:Products){

  }

}

export class SupressionProductsActionERROR implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SUPPRIMER_PRODUITS_ERROR;
  constructor(public payload:string){
  }

}
 /**
 * Actions Ajouter  produits
 */

export  class AjouterProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.AJOUTER_PRODUITS;

  constructor(public payload: any) {

  }
}

  export class  AjouterProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.AJOUTER_PRODUITS_REUSSI;
  constructor(public payload: any){

  }

}

export class  AjouterProductsActionERROR implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.AJOUTER_PRODUITS_ERROR;
  constructor(public payload:string){
  }

}
/**
 * Actions pour  enregistrer  produits
 */

export  class EnregistrerProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.ENREGISTRER_PRODUITS;
//Pour enregistrer on retourne le produit
  constructor(public payload: Products) {

  }
}

  export class  EnregistrerProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.ENREGISTRER_PRODUITS_REUSSI
    //Pour enregistrer on retourne le produit enregistré
  constructor(public payload: Products){

  }

}

export class  EnregistrerProductsActionERROR implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.ENREGISTRER_PRODUITS_ERROR;
  constructor(public payload:string){
  }

}

/**
 * Actions pour  modifier  produits
 */

export  class ModifierProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.MODIFIER_PRODUITS;
//Pour enregistrer on retourne le produit
  constructor(public payload: number) {

  }
}

  export class  ModifierProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.MODIFIER_PRODUITS_REUSSI
    //Pour enregistrer on retourne le produit enregistré
  constructor(public payload: Products){

  }

}

export class  ModifierProductsActionERROR implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.MODIFIER_PRODUITS_ERROR;
  constructor(public payload:string){
  }

}


/**
 * Actions pour  Update  produits
 */

export  class UpdateProductsAction implements  Action {
  type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUITS;
  constructor(public payload: Products) {

  }
}

  export class  UpdateProductsActionSucess implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUITS_REUSSI
    //Pour enregistrer on retourne le produit enregistré
  constructor(public payload: Products){

  }

}

export class  UpdateProductsActionERROR implements  Action{
  type: ProductsActionsTypes=ProductsActionsTypes.UPDATE_PRODUITS_ERROR;
  constructor(public payload:string){
  }

}


export type  ProductsActions = GetAllProductsAction | GetAllProductsActionSucess |GetAllProductsActionERROR
  | GetAllSelectedProductsAction | GetAllSelectedProductsActionSucess |GetAllSelectedProductsActionERROR
  | GetAllSearchProductsAction | GetAllSearchProductsActionSucess |GetAllSearchProductsActionERROR
  | SelectionProductsAction | SelectionProductsActionSucess |SelectionProductsActionERROR
  | AjouterProductsAction | AjouterProductsActionSucess |AjouterProductsActionERROR
  | EnregistrerProductsAction | EnregistrerProductsActionSucess |EnregistrerProductsActionERROR
  | ModifierProductsAction | ModifierProductsActionSucess |ModifierProductsActionERROR
  | UpdateProductsAction | UpdateProductsActionSucess |UpdateProductsActionERROR


