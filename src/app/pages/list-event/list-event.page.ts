import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss'],
})
export class ListEventPage implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
