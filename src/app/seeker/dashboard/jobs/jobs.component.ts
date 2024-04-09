import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  headers: string[] = [
    'Company Name',
    'Job Role',
    'Skills',
    'Job Type',
    'Experience',
  ];
  jobs: any[] = [
    {
      companyName: 'quixy',
      jobRole: 'Software Engineer',
      skills: 'JavaScript, Angular',
      jobType: 'Full-time',
      experience: '2-5 years',
    },
    {
      companyName: 'navayuga',
      jobRole: 'Data Analyst',
      skills: 'SQL, Python, Data Visualization',
      jobType: 'Contract',
      experience: '3-7 years',
    },
  ];
  appliedmessage: any;
  alreadyapplied: any;
  errormessage: any;

  constructor() {}

  ngOnInit() {}

  apply(job: any) {
    console.log('Applying for job:', job);

    const randomOutcome = Math.floor(Math.random() * 3);

    if (randomOutcome === 0) {
      this.appliedmessage = 'Successfully applied for the job!';
    } else if (randomOutcome === 1) {
      this.alreadyapplied = 'You have already applied for this job.';
    } else {
      this.errormessage =
        'Failed to apply for the job. Please try again later.';
    }
  }
}
