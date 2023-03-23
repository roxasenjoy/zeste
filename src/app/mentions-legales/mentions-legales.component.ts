import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.css']
})
export class MentionsLegalesComponent implements OnInit {

  background = "linear-gradient(to bottom,rgba(0,0,0, 0.3),rgba(0,0,0, .3)),url('/assets/img/header.jpg')"; // decorate the property with @Input()
 

  constructor() { }

  ngOnInit(): void {
  }

}
