import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Импорт ReactiveFormsModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { LessonManagementComponent } from './lesson-management/lesson-management.component';
import { InteractiveModuleComponent } from './interactive-module/interactive-module.component';
import { CommunicationComponent } from './communication/communication.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafeUrlPipe } from './safe-url.pipe';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    LoginComponent,
    SignUpComponent,
    LogoutComponent,

    CourseCatalogComponent,
    CoursePageComponent,
    CreateCourseComponent,
    CourseManagementComponent,
    StudentCourseComponent,
    TeacherDashboardComponent,
    LessonManagementComponent,
    InteractiveModuleComponent,
    CommunicationComponent,
    StudentCoursesComponent,

    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
