export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR,



}

/**
 * Ici nous créons un truc générique qui peut s'adapter aux autres
 */
export interface AppDataState <T> {
//DataState qui est un objet de DataStateEnum avec les different statut :LOADING LOADED ET ERROR
  dataState? : DataStateEnum,
  data?: T,
  errorMessage?:string

}
