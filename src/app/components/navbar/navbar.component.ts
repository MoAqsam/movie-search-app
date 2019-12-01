import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems: Array<string> = [
    'Home',
    'List',
    'Settings'
  ];
  constructor() { }

  ngOnInit() {
  }

}
