import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listEvent = [{
    'id': 1,
    'libelle': "formation Arduino",
    "date": "f"

  },
  {
    'id': 2,
    'libelle': "formation Ionic",
    "date": "f"

  }, {
    'id': 3,
    'libelle': "formation React",
    "date": "f"

  }];

  unEvent = {
    'id': 3,
    'libelle': "formation ",
    "date": "f"
  };

  compteur = 0;

  augmenter() {
    this.compteur += 1;
  }

  dimunuer() {
    this.compteur -= 1;
  }

  constructor() { }

}
