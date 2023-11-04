import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
dernierDateMiseAJour  = new Date();
  appareils = [{
     nom: "Televison",
    status : 'eteint'
  },
    {
      nom: "Televison2222",
      status : 'allumé'
    },{
      nom: "Televison2222",
      status : 'eteint'
    },
    {
      nom: "Televison2222",
      status : 'allumé'
    }];
  esAuthentifie = false;
  appareilUn: "Machine à laver";
  appareilDeux: "Machine à laver";
  appareilTrois: "Machine à laver";

constructor(){
  setTimeout( ()=>{
    return this.esAuthentifie = true;
  }, 5000);
}

  onAllumer() {
    console.log("Tout est allumé");
  }


}
