import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css'],
})
export class RegisComponent implements OnInit {
  constructor(private router: Router) {}


  ngOnInit() {}
  employeeregisterpage() {
    this.router.navigate(['emp_register']);
  }
  recruiterregisterpage() {
    this.router.navigate(['rec_register']);
  }

}
