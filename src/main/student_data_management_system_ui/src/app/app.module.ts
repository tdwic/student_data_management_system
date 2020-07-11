import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {FormsModule} from '@angular/forms';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import {AuthService} from './auth-service';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CoursesPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    ResultPageComponent,
    SignupPageComponent,
    MainloginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        FormsModule
    ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
