import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  titre="Welcome";
  paragraphe="Etiam volutpat dui sit amet turpis porta, at suscipit sem consequat. Integer tincidunt neque in tempus posuere. Duis congue purus eu dui vehicula tristique. In sed ultricies justo. Integer imperdiet elit non scelerisque luctus. Curabitur vitae magna ante. Vivamus quis risus eget tortor maximus aliquet ut nec mauris. Phasellus ultrices congue nunc, at ullamcorper ligula congue ultricies. Integer posuere dui in sapien maximus, ac vestibulum odio aliquet. Suspendisse luctus nunc ac faucibus scelerisque. Fusce mattis turpis ac dui pretium consequat. Aliquam erat volutpat. In at risus ex. Nam vel bibendum est. Ut nibh dui, volutpat non enim vel, condimentum dapibus turpis.";


  constructor(private router:Router) {


    //  changerPage(){

    //   router.navigateByUrl('tab1/list-event');
    // }

  }

}
function changerPage() {
  throw new Error('Function not implemented.');
}

