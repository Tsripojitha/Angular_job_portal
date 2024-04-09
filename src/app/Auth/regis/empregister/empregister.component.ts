import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css'],
})
export class EmpregisterComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder,private serviceobject: ServiceService) {}
  formgroupobject = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    phonenumber: new FormControl(),
    experience:new FormControl(),
    department: new FormControl(),
  })
  // EmpRegisterForm!: FormGroup;
  registrationsuccess: any;
  regisfail: any;
  regisserver: any;
   username!:string;
   password!:string;
   phonenumber!:string;
   experience!:string;
   department!:string;

  ngOnInit() {
  //   this.EmpRegisterForm = this.fb.group({
  //     username: ['', Validators.required],
  //     password: [
  //       '',
  //       Validators.compose([
  //         Validators.required,
  //         Validators.pattern(
  //           '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  //         ),
  //         Validators.minLength(8),
  //       ]),
  //     ],
  //     mail: ['', Validators.compose([Validators.required, Validators.email])],
  //     gender: ['', Validators.required],
  //     phonenumber: ['', Validators.required],
  //     interests: [''],
  //     experience: [''],
  //     lastjobexp: ['', Validators.required],
  //     lastjobDesig: ['', Validators.required],
  //     department: [''],
  //     reasonsforleaving: [''],
  //   });
  }
  // registeremployee() {
  //   const mockResponse = {
  //     status: 1, // Change this to 0 to failure
  //   };
  registeremployee() {
    // const mockResponse = {
    //   status: 1, };
    // const username =this.formgroupobject.get('username')?.value;
    // const password=this.formgroupobject.get('password')?.value;
    // const phonenumber=this.formgroupobject.get('phonenumber')?.value;
    // const experience=this.formgroupobject.get('experience')?.value;
    // const department=this.formgroupobject.get('department')?.value;
    
    const data = {
      username :this.username,password:this.password,phonenumber:this.phonenumber,experience:this.experience,department:this.department
    };
    this.serviceobject.addNewUser(data).subscribe(
      (response) => {
        console.log('Post successful', response);
      },
      (error) => {
        console.error('Error while posting data:', error);
      }
    );

    //  setTimeout(() => {
    //    if (mockResponse.status === 1) {
    //      this.registrationsuccess = 'Congratulations, you are now a job seeker!';
    //      this.formgroupobject.reset();
    //      setTimeout(() => {
    //        this.router.navigate(['/login/emp_login']);
    //      }, 3000);
    //    } else {
    //      this.regisfail = 'You are already a job seeker';
    //      console.log(this.regisfail);
    //    }
    // }, 1000); // Simulating network delay

    //   registeremployee(){
    //     const data = {
    //       username : this.username,password : this.password;
    //     };
    //     this.serviceobject.postMedicine(data).subscribe(
    //       (response) => {
    //         console.log('Post successful', response);
    //       },
    //       (error) => {
    //         console.error('Error while posting data:', error);
    //       }
    //     );
    //   }
    // }
  }
}
