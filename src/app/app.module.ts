import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CvFormsNavComponent } from './cv-forms/cv-forms-nav/cv-forms-nav.component';
import { PersonalDataComponent } from './cv-forms/personal-data/personal-data.component';
import { QulificationsComponent } from './cv-forms/qulifications/qulifications.component';
import { ExperiencesComponent } from './cv-forms/experiences/experiences.component';
import { CoursesComponent } from './cv-forms/courses/courses.component';
import { SkillsComponent } from './cv-forms/skills/skills.component';
import { MainNavComponent } from './ui/main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    CvFormsNavComponent,
    PersonalDataComponent,
    QulificationsComponent,
    ExperiencesComponent,
    CoursesComponent,
    SkillsComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'cv-forms', component: CvFormsNavComponent,
        children:[
          { path: 'personal-data', component: PersonalDataComponent },
          { path: 'qualifications', component: QulificationsComponent },
          { path: 'experiences', component: ExperiencesComponent },
          { path: 'courses', component: CoursesComponent },
          { path: 'skills', component: SkillsComponent }
        ]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
