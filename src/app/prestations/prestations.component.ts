import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {


  reviewPage:number = 0;

  background = "linear-gradient(to bottom,rgba(0,0,0, 0.3),rgba(0,0,0, .3)),url('/assets/img/prestation.jpg')";

  constructor() { }

  ngOnInit(): void {

  }

  right(){
    this.reviewPage++;

    if(this.reviewPage >= 2){
      this.reviewPage = 1;
    }
  }


  left(){
    this.reviewPage--;

    if(this.reviewPage <= 0){
      this.reviewPage = 0;
    }
  }

 


}
