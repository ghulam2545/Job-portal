import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { DescriptionComponent } from './pages/description/description.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ReviewComponent } from './pages/review/review.component';
import { PostComponent } from './pages/post/post.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { RecruiterComponent } from './pages/recruiter/recruiter.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DescriptionComponent,
    ApplyComponent,
    ReviewComponent,
    PostComponent,
    ApplicantComponent,
    RecruiterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
