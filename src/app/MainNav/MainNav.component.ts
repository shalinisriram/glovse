import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MainNav',
  templateUrl: './MainNav.component.html',
  styleUrls: ['./MainNav.component.css']
})
export class MainNavComponent implements OnInit {
  isShown =false
  constructor() { }

  ngOnInit() {
  }
 
}
