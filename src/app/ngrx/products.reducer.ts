/**
 * Gestion de notre state ici : NB=>Seul le state modifie l'état
 */
import {Products} from '../models/products';
import {ProductsActions, ProductsActionsTypes} from './products.actions';

export enum ProductsStateEnum {
  EN_COURS_DE_LECTURE = 'EN_COURS_DE_LECTURE',
  DONNEES_CHARGEES_AVEC_SUCCES = 'DONNEES CHARGEES AVEC_SUCCES',
  DONNEES_CHARGEES_AVEC_ERRORS = 'ERREURS DE CHARGEMENT DES DONNEES',
  STATE_INITIAL = 'State initial',
  NOUVEAU = 'NOUVEAU PRODUIT',
  EDITION = 'EDITION PRODUIT',
  UPDATED = 'UPDATED',
  SUPPRESSION = 'SUPPRESSION PRODUIT'

}

//Notre state est le suivant
export interface ProductState {
  products: Products[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  produitCourant?: Products
}

/**
 * Si nous demarrons l'application il faudra initialiser l'état de notre application
 * @param state
 */
const initState: ProductState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.STATE_INITIAL,
  produitCourant: null

};

export function productReducer(state: ProductState = initState, action: ProductsActions): ProductState {
  switch (action.type) {

    /**
     * Liste des produuits reducer
     */
    case ProductsActionsTypes.TOUT_LES_PRODUITS:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE
      };
    case ProductsActionsTypes.TOUT_LES_PRODUITS_REUSSI:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_SUCCES, products: action.payload
      };
    case ProductsActionsTypes.TOUT_LES_PRODUITS_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };
    /**
     * Liste des produuits selectionnés reducer
     */
    case ProductsActionsTypes.TOUT_LES_PRODUITS_SELECTIONNES:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE
      };
    case ProductsActionsTypes.TOUT_LES_PRODUITS_SELECTIONNES_REUSSI:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_SUCCES, products: action.payload
      };
    case ProductsActionsTypes.TOUT_LES_PRODUITS_SELECTIONNES_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };
    /**
     * Liste des produuits recherchés reducer
     */
    case ProductsActionsTypes.TOUT_LES_PRODUITS_RECHERCHES:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE
      };
    case ProductsActionsTypes.TOUT_LES_PRODUITS__RECHERCHE_REUSSI:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_SUCCES, products: action.payload
      };
    case ProductsActionsTypes.TOUT_LES_PRODUITS__RECHERCHES_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };

    /**
     * Produit selectionné dans le tableau reducer //Comme si on modifie
     */
    case ProductsActionsTypes.SELECT_PRODUITS:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE
      };
    case ProductsActionsTypes.SELECT_PRODUITS_REUSSI:
      //Comme si on modifie
      let product: Products = action.payload;
      //Liste des produits et on récupère une copie de la liste puisque nous n'avons pas le droit de modifier le state
      let listeproducts = [...state.products];
      /**
       * Parcour de la liste et on verifie si c'est le meme élement avec la méthode map
       */
      let data: Products[] = listeproducts.map(pr => pr.id == product.id ? product : pr);
      console.log(data);
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_SUCCES, products: data
      };
    case ProductsActionsTypes.SELECT_PRODUITS_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };

    /**
     * Suppresion des produuits  reducer
     */
    /**
     * Produit selectionné dans le tableau reducer //Comme si on modifie
     */
    case ProductsActionsTypes.SUPPRIMER_PRODUITS:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE
      };
    case ProductsActionsTypes.SELECT_PRODUITS_REUSSI:
      let pro: Products = action.payload;
      let index = state.products.indexOf(pro);
      let liste = [...state.products];
      liste.splice(index, 1);
      console.log(liste);
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_SUCCES, products: liste
      };
    case ProductsActionsTypes.SELECT_PRODUITS_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };


    /**
     * Ajouter Produit
     */
    // case ProductsActionsTypes.AJOUTER_PRODUITS_ERROR:
    //   return {
    //     ...state,dataState:ProductsStateEnum.EN_COURS_DE_LECTURE
    //   }
    case ProductsActionsTypes.AJOUTER_PRODUITS:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE,
      };
    case ProductsActionsTypes.AJOUTER_PRODUITS_REUSSI:
      return {
        ...state, dataState: ProductsStateEnum.NOUVEAU,
      };
    case ProductsActionsTypes.AJOUTER_PRODUITS_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };

    /**
     * ENREGISTRER  Produit
     */

    case ProductsActionsTypes.ENREGISTRER_PRODUITS:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE,
      };
    case ProductsActionsTypes.ENREGISTRER_PRODUITS_REUSSI:
      let produits: Products[] = [...state.products];
      produits.push(action.payload);
      return {
        /**
         * Une fois enregistrer on retourne la liste actualisé des produits
         */
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_SUCCES, products: produits
      };
    case ProductsActionsTypes.ENREGISTRER_PRODUITS_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };

    /**
     * Modifier un produit Reducer
     */

    case ProductsActionsTypes.MODIFIER_PRODUITS:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE,
      };

    case ProductsActionsTypes.MODIFIER_PRODUITS_REUSSI:

      return {
        //le produit courant et l'action
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_SUCCES, produitCourant: action.payload
      };
    case ProductsActionsTypes.MODIFIER_PRODUITS_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };

    /**
     * Update un produit Reducer
     */

    case ProductsActionsTypes.UPDATE_PRODUITS:
      return {
        ...state, dataState: ProductsStateEnum.EN_COURS_DE_LECTURE,
      };

    case ProductsActionsTypes.UPDATE_PRODUITS_REUSSI:
      let updateProduct: Products = action.payload;
      let updateProductList: Products[] = state.products.map(
        p => (p.id == updateProduct.id)?updateProduct :p
      );
      return {
        //le produit courant et l'action
        ...state, dataState: ProductsStateEnum.UPDATED, products: updateProductList
      };
    case ProductsActionsTypes.UPDATE_PRODUITS_ERROR:
      return {
        ...state, dataState: ProductsStateEnum.DONNEES_CHARGEES_AVEC_ERRORS, errorMessage: action.payload
      };
    default:
      return {...state};

  }


}
