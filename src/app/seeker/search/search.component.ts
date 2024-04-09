import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  username: any;
  searchform!: FormGroup;
  jobs: any[] = [];
  headers = ['Job Role', 'Experience', 'Job Type', 'PostedDate'];
  nojobs!: string;
  successmsg: boolean = false;
  companymsg: boolean = false;
  rolemsg: boolean = false;
  latestmsg: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.username = localStorage.getItem('currentemployee');
    this.searchform = this.fb.group({
      searchdrop: [''],
      searchname: [''],
    });
  }

  search() {
    let values = this.searchform.value;
    if (values.searchdrop == 'companyname') {
      this.latestmsg = false;
      this.companymsg = true;
      this.rolemsg = false;

      let companyJobs = [
        {
          role: 'Software Engineer',
          experience: '2 years',
          jobType: 'Full-time',
          postedDate: '2024-04-01',
        },
        {
          role: 'Web Developer',
          experience: '3 years',
          jobType: 'Contract',
          postedDate: '2024-03-29',
        },
      ];
      this.jobs = companyJobs;
      this.successmsg = true;
      if (companyJobs.length === 0) {
        this.nojobs = 'No jobs found for this company';
      }
    } else if (values.searchdrop == 'Role') {
      this.latestmsg = false;
      this.companymsg = false;
      this.rolemsg = true;

      let roleJobs = [
        {
          role: 'Software Engineer',
          experience: '2 years',
          jobType: 'Full-time',
          postedDate: '2024-04-01',
        },
        {
          role: 'Software Developer',
          experience: '3 years',
          jobType: 'Contract',
          postedDate: '2024-03-29',
        },
      ];
      this.jobs = roleJobs;
      this.successmsg = true;
      if (roleJobs.length === 0) {
        this.nojobs = 'No jobs found for this role';
      }
    } else {
      this.latestmsg = true;
      this.companymsg = false;
      this.rolemsg = false;

      let latestJobs = [
        {
          role: 'Data Scientist',
          experience: '5 years',
          jobType: 'Full-time',
          postedDate: '2024-04-05',
        },
        {
          role: 'Product Manager',
          experience: '6 years',
          jobType: 'Full-time',
          postedDate: '2024-04-04',
        },
      ];
      this.jobs = latestJobs;
      this.successmsg = true;
      if (latestJobs.length === 0) {
        this.nojobs = 'No latest jobs available';
      }
    }
  }
}
