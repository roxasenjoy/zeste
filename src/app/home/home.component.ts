import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  carousel: any;
  moove = 0;

  constructor() { }

  ngOnInit(): void {
    this.carousel = document.getElementById('carousel') as HTMLElement;
  }

  left(){

    let width = window.innerWidth;
    let widthElement = 400;

    if(width <= 700){
      widthElement = 300;
    }
    //Récupérer le container
    if(widthElement * this.moove !== 0){
      this.moove--;
      this.carousel.style.transform = "translate(-" + widthElement * this.moove +"px, 0)";
    }
  }

  right(){  
    
    let width = window.innerWidth;
    let total = 400 * this.moove;
    let widthElement = 400;

    if(width <= 700){
      total = 300 * this.moove;
      widthElement = 300;
    }

    if(total <= widthElement * 2 && width >= 1920){
      this.moove++;
      this.carousel.style.transform = "translate(-" + total +"px, 0)";

    } else if(total <= widthElement * 3 && width >= 1600 && width <= 1919){
      this.moove++;
      this.carousel.style.transform = "translate(-" + total +"px, 0)";

    } else if(total <= widthElement * 4 && width >= 1200 && width <= 1599){
      this.moove++;
      this.carousel.style.transform = "translate(-" + total +"px, 0)";

    } else if(total <= widthElement * 5 && width >= 800 && width <= 1199){
      this.moove++;
      this.carousel.style.transform = "translate(-" + total +"px, 0)";

    } else if(total <= widthElement * 6 && width >= 400 && width <= 799){
      this.moove++;
      this.carousel.style.transform = "translate(-" + total +"px, 0)";

    } else if(total <= widthElement * 7 && width <= 400){
      this.moove++;
      this.carousel.style.transform = "translate(-" + total +"px, 0)";
    }
  }

}
