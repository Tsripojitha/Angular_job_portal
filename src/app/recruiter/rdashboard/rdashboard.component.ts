import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rdashboard',
  templateUrl: './rdashboard.component.html',
  styleUrls: ['./rdashboard.component.css'],
})
export class RdashboardComponent implements OnInit {
  constructor(private router: Router, private activeroute: ActivatedRoute) {}
  companyName: any;

  ngOnInit() {
    const companyPayload = {
      companyName: 'quixy',
    };

    this.companyName = companyPayload.companyName;
  }

  logoutRecruiter() {
    this.router.navigate(['login/rec_login']);
  }

  applied_Employees() {
    this.router.navigate(['applied'], { relativeTo: this.activeroute });
  }

  posted_jobs() {
    this.router.navigate(['postedjobs'], { relativeTo: this.activeroute });
  }

  gotoprofilepage() {
    this.router.navigate(['recruiter/rprofile']);
  }
}
