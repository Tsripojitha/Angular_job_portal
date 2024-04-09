import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css'],
})
export class PostedjobsComponent implements OnInit {
  headers = ['Job Role', 'Experience', 'Job Type', 'PostedDate', ''];
  posted: any = [];
  nojobs: any;
  totaljobs: any;
  errormsg: any;
  successmsg: boolean = false;

  constructor(private router: Router, private activeroute: ActivatedRoute) {}

  ngOnInit() {
    this.postedjobs();
  }

  postedjobs() {
    const responseData = {
      status: 1,
      data: [
        {
          jobRole: 'Software Developer',
          experience: '2 years',
          jobType: 'Full-time',
          postedDate: '2024-04-09',
        },
        {
          jobRole: 'Data Analyst',
          experience: '3 years',
          jobType: 'Part-time',
          postedDate: '2024-04-08',
        },
      ],
    };

    if (responseData.status && responseData.status === 1) {
      console.log(responseData);
      this.posted = responseData.data;
      this.totaljobs = responseData.data.length;
      this.successmsg = true;
    } else {
      console.log(responseData);
      this.nojobs = 'No jobs found';
      console.log(this.posted.length);
    }
  }
}
