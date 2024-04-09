import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  username: any;

  constructor(private router: Router, private activeroute: ActivatedRoute) {}

  ngOnInit() {
    this.username = localStorage.getItem('currentemployee');
  }

  logoutemployee() {
    localStorage.removeItem('currentemployee');
    this.router.navigate(['login/emp_login']);
  }

  jobs() {
    this.router.navigate(['jobs'], { relativeTo: this.activeroute });
  }

  appliedjobs() {
    this.router.navigate(['appliedjobs'], { relativeTo: this.activeroute });
  }

  gotoprofilepage() {
    this.router.navigate(['seeker/eprofile']);
  }
}
