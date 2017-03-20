import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { HomeComponent } from './home/home.component';
import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireModule} from 'angularfire2';
import {RouterModule} from '@angular/router';
import {routerConfig} from "./router.config";
import { CourseDetailComponent } from './course-detail/course-detail.component';
import {CoursesService} from "./services/courses.service";
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import {NewsletterService} from "./services/newsletter.service"; 
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import {UserService} from "./services/user.service";
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseComponent } from './course/course.component';
import { CourseMasterComponent } from './course-master/course-master.component';
import {CourseMdService} from "./services/course-md.service";
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    EventBusExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent,
    HomeComponent,
    CourseDetailComponent,
    CoursesListComponent,
    CourseDetailHeaderComponent,
    NewsletterComponent,
    TopMenuComponent,
    LoginComponent,
    AllLessonsComponent,
    CourseComponent,
    CourseMasterComponent,
    LessonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig),
  ],
  providers: [
      CoursesService,
      NewsletterService,
      UserService,
      CourseMdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }






