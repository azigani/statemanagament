import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() nomAppareil : string;
@Input() statusAppareil : string;
  // nomAppareil = 'Mon premier appareil Machine à laver';
  // statusAppareil = 'Eteint';

  constructor() { }

  ngOnInit(): void {

  }

  /**
   * Methode qui va rétourner le statut de l'appreil
   */
  onGetStatus(){
    return this.statusAppareil;
  }

  getColor() {
    if(this.statusAppareil ==='allumé'){
      return 'green';
    }
    else if(this.statusAppareil ==='eteint') {
      return  'red';
    }
  }
}
