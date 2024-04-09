import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css'],
})
export class PostjobComponent implements OnInit {
  postjobForm!: FormGroup;
  postedMsg: any;
  alreadyposted: any;
  errormsg: any;
  companyname: any;
  companyId: any;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    const companyPayload = {
      companyId: 1,
      companyName: 'quixy',
    };

    this.companyname = companyPayload.companyName;
    this.companyId = companyPayload.companyId;

    this.postjobForm = this.fb.group({
      companyId: new FormControl(this.companyId),
      jobRole: ['', Validators.required],
      expRequired: ['', Validators.required],
      skills: ['', Validators.required],
      educationalQualifications: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobType: ['', Validators.required],
    });
  }

  logoutRecruiter() {
    this.router.navigate(['login/rec_login']);
  }

  postajob() {
    console.log(this.postjobForm.value);

    const mockResponse = {
      status: 1, // Change to 0 to failure
      message: 'Job posted successfully',
    };

    setTimeout(() => {
      if (mockResponse.status === 1) {
        this.postedMsg = mockResponse.message;
        setTimeout(() => {
          this.postedMsg = '';
          this.router.navigate(['rdashboard/postedjobs']);
        }, 2000);
      } else {
        this.alreadyposted = mockResponse.message;
        setTimeout(() => {
          this.alreadyposted = '';
        }, 2000);
      }
    }, 1000); // Simulating network delay
  }
}
