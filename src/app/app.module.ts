import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmploginComponent } from './Auth/login/emplogin/emplogin.component';
import { EmpregisterComponent } from './Auth/regis/empregister/empregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { RecruiterregisterComponent } from './Auth/regis/recruiterregister/recruiterregister.component';
import { PostjobComponent } from './recruiter/postjob/postjob.component';
import { AppliedEmployeesComponent } from './recruiter/rdashboard/applied-employees/applied-employees.component';
import { RdashboardComponent } from './recruiter/rdashboard/rdashboard.component';
import { PostedjobsComponent } from './recruiter/rdashboard/postedjobs/postedjobs.component';
import { DashboardComponent } from './seeker/dashboard/dashboard.component';
import { AppliedjobsComponent } from './seeker/dashboard/appliedjobs/appliedjobs.component';
import { JobsComponent } from './seeker/dashboard/jobs/jobs.component';
import { SearchComponent } from './seeker/search/search.component';
import { RegisComponent } from './Auth/regis/regis.component';
import { LoginComponent } from './Auth/login/login.component';
import { ServiceService } from './service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,EmploginComponent,EmpregisterComponent,RecruiterloginComponent,RecruiterregisterComponent,PostjobComponent,
    RdashboardComponent,AppliedEmployeesComponent,PostedjobsComponent,DashboardComponent,AppliedjobsComponent,JobsComponent,SearchComponent,RegisComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
