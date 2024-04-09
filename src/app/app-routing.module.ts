import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { EmploginComponent } from './Auth/login/emplogin/emplogin.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { RegisComponent } from './Auth/regis/regis.component';
import { EmpregisterComponent } from './Auth/regis/empregister/empregister.component';
import { DashboardComponent } from './seeker/dashboard/dashboard.component';
import { RecruiterregisterComponent } from './Auth/regis/recruiterregister/recruiterregister.component';
import { JobsComponent } from './seeker/dashboard/jobs/jobs.component';
import { AppliedjobsComponent } from './seeker/dashboard/appliedjobs/appliedjobs.component';
import { RdashboardComponent } from './recruiter/rdashboard/rdashboard.component';
import { PostedjobsComponent } from './recruiter/rdashboard/postedjobs/postedjobs.component';
import { AppliedEmployeesComponent } from './recruiter/rdashboard/applied-employees/applied-employees.component';
import { SearchComponent } from './seeker/search/search.component';
import { PostjobComponent } from './recruiter/postjob/postjob.component';

const routes: Routes = [
  { path: '', redirectTo: 'login/emp_login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: 'emp_login', component: EmploginComponent },
      { path: 'rec_login', component: RecruiterloginComponent },
    ],
  },
  {
    path: 'register',
    component: RegisComponent,
    children: [
      { path: 'emp_register', component: EmpregisterComponent },
      { path: 'rec_register', component: RecruiterregisterComponent },


    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'jobs', component: JobsComponent },
      { path: 'appliedjobs', component: AppliedjobsComponent },
    ],
  },
  {
    path: 'rdashboard',
    component: RdashboardComponent,
    children: [
      { path: 'postedjobs', component: PostedjobsComponent },
      { path: 'applied', component: AppliedEmployeesComponent },
    ],
  },
  {
    path: 'seeker/search',
    component: SearchComponent,
  },
  {
    path: 'recruiter/postjob',
    component: PostjobComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
