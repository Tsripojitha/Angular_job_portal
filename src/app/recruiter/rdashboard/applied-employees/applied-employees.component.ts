import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-applied-employees',
  templateUrl: './applied-employees.component.html',
  styleUrls: ['./applied-employees.component.css'],
})
export class AppliedEmployeesComponent implements OnInit {
  headers = [
    'SeekerName',
    'SeekerMail',
    'SeekerMobile',
    'SeekerLoc',
    'Interests',
    'AppliedFor',
    '',
  ];
  seekersInfo: any = [];
  notapplied: any;
  errormsg: any;

  constructor(private router: Router, private activeroute: ActivatedRoute) {}

  ngOnInit() {
    this.getSeekers();
  }

  getSeekers() {
    // Simulated data
    const response = {
      status: 1,
      employeearray: [
        {
          SeekerName: 'John Doe',
          SeekerMail: 'john@example.com',
          SeekerMobile: '1234567890',
          SeekerLoc: 'New York',
          Interests: ['AI', 'Machine Learning'],
          AppliedFor: 'Software Engineer',
        },
        {
          SeekerName: 'Jane Doe',
          SeekerMail: 'jane@example.com',
          SeekerMobile: '9876543210',
          SeekerLoc: 'San Francisco',
          Interests: ['Web Development', 'Mobile Development'],
          AppliedFor: 'Frontend Developer',
        },
      ],
    };

    if (response.status && response.status === 1) {
      this.seekersInfo = response.employeearray;
      console.log(this.seekersInfo);
    } else {
      // Handle the case where there are no applied employees
      this.notapplied = 'No employees have applied.';
    }
  }

  call_for_interview(info: any) {
    window.alert('You are selected');
  }

  reject(info: any) {
    window.alert('You are rejected');
  }
}
