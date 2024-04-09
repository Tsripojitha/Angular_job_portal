import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent  {
  username!: string|null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('currentemployee');
  }

  logout() {
    localStorage.removeItem('currentemployee');
    this.router.navigate(['login/emp_login']);
  }
}
