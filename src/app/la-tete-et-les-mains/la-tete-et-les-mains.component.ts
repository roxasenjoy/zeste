import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-tete-et-les-mains',
  templateUrl: './la-tete-et-les-mains.component.html',
  styleUrls: ['./la-tete-et-les-mains.component.css']
})
export class LaTeteEtLesMainsComponent implements OnInit {

  background = "linear-gradient(to bottom,rgba(0,0,0, 0.3),rgba(0,0,0, .3)),url('/assets/img/tete.jpg')";

  constructor() { }

  ngOnInit(): void {
  }

}
