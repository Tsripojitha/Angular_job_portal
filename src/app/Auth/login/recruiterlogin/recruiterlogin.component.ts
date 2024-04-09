import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-recruiterlogin',
  templateUrl: './recruiterlogin.component.html',
  styleUrls: ['./recruiterlogin.component.css'],
})
export class RecruiterloginComponent implements OnInit {
  loginsuccess: any;
  loginfail: any;

  constructor(private router: Router, private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    companyName: [null, Validators.required],
    password: [
      null,
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  });

  ngOnInit() {}

  moveToRegister() {
    this.router.navigate(['register/rec_register']);
  }

  login() {
    const mockResponse = {
      status: 1,
      data: {
        token: 'mockToken123',
        companyName: 'mockCompanyName',
      },
    };

    setTimeout(() => {
      if (mockResponse.status && mockResponse.status === 1) {
        this.loginsuccess = 'Login Success-Going to Dashboard';
        localStorage.setItem('token', mockResponse.data.token);
        localStorage.setItem('currentrecruiter', mockResponse.data.companyName);
        this.loginForm.reset();
        setTimeout(() => {
          this.router.navigate(['rdashboard/postedjobs']);
        }, 3000);
      } else {
        this.loginfail = 'Invalid Username/Password';
      }
    }, 1000); 
  }

  get form() {
    return this.loginForm.controls;
  }
}
