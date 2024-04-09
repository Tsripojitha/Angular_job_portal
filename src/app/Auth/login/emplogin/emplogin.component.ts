import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css'],
})
export class EmploginComponent implements OnInit {
  loginsuccess: any;
  loginfail: any;

  constructor(private router: Router, private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    username: [null, Validators.required],
    password: [
      null,
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  });

  ngOnInit() {}

  moveToRegister() {
    this.router.navigate(['register/emp_register']);
  }

  login() {
    const mockResponse = {
      status: 1,
      data: {
        token: 'mockToken123',
        username: 'mockUsername',
      },
    };
    setTimeout(() => {
      if (mockResponse.status && mockResponse.status === 1) {
        this.loginsuccess = 'Login Success-Going to Dashboard';
        localStorage.setItem('token', mockResponse.data.token);
        localStorage.setItem('currentemployee', mockResponse.data.username);
        this.loginForm.reset();
        setTimeout(() => {
          this.router.navigate(['dashboard/jobs']);
        }, 2000);
      } else {
        this.loginfail = 'Invalid Username/Password';
      }
    }, 1000);
  }

  get form() {
    return this.loginForm.controls;
  }
}
