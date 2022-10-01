import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Il faut changer la variable ici présente pour changer le background en fonction de la page
  @Input() background = "linear-gradient(to bottom,rgba(0,0,0, 0.3),rgba(0,0,0, .3)),url('/assets/img/header.jpg')"; // decorate the property with @Input()
 
  constructor() { }

  ngOnInit(): void {

  }


}
