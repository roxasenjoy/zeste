import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  reviewPage = 0;

  constructor() {

    

   }

  ngOnInit(): void {
    // Récupération de la balise <a> avec la classe 'mon-lien'
    const lien = document.getElementsByClassName('eapps-link')[0] as HTMLAnchorElement;
        
    // Modification de l'attribut href
    lien?.setAttribute('href', '');
   }

  right(){
    this.reviewPage++;

    if(this.reviewPage >= 3){
      this.reviewPage = 0;
    }
  }


  left(){
    this.reviewPage--;

    if(this.reviewPage <= 0){
      this.reviewPage = 0;
    }
  }

}
