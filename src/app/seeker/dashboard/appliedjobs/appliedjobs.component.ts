import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css'],
})
export class AppliedjobsComponent implements OnInit {
  headers = ['Company Name', 'Job Role', 'Job Type', 'Experience'];
  applied: any[] = [
    {
      companyName: 'quixy',
      jobRole: 'Software Developer',
      jobType: 'Full-time',
      experience: '2 years',
    },
    {
      companyName: 'navayuga',
      jobRole: 'Data Analyst',
      jobType: 'Part-time',
      experience: '1 year',
    },
  ];
  nojobs: any;
  errormsg: any;
  successmsg!: boolean;

  constructor() {}

  ngOnInit() {
    this.successmsg = true; 
  }
}
