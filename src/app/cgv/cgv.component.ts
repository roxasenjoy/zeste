import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cgv',
  templateUrl: './cgv.component.html',
  styleUrls: ['./cgv.component.css']
})
export class CgvComponent implements OnInit {

  background = "linear-gradient(to bottom,rgba(0,0,0, 0.3),rgba(0,0,0, .3)),url('/assets/img/tete.jpg')";

  constructor() { }

  ngOnInit(): void {
  }

}
