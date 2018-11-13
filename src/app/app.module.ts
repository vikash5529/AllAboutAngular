
import { UserComponent } from './user/user.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HomecontentComponent } from './homecontent/homecontent.component';

import { AssessmentComponent } from './assessment/assessment.component';
const route: Routes = [
  { path: '', component: HomecontentComponent },
  { path: 'home', component: HomecontentComponent },
  {
    path: 'main', component: MaincontentComponent,
    children: [
      { path: 'assessment', component: AssessmentComponent },
    ]
  }

]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    SidenavComponent,
    MaincontentComponent,
    HomecontentComponent,
    AssessmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
