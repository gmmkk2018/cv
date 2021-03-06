import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CvFormsNavComponent } from './cv-forms/cv-forms-nav/cv-forms-nav.component';
import { PersonalDataComponent } from './cv-forms/personal-data/personal-data.component';
import { QulificationsComponent } from './cv-forms/qulifications/qulifications.component';
import { ExperiencesComponent } from './cv-forms/experiences/experiences.component';
import { CoursesComponent } from './cv-forms/courses/courses.component';
import { SkillsComponent } from './cv-forms/skills/skills.component';
import { MainNavComponent } from './ui/main-nav/main-nav.component';
import { CvArtboardComponent } from './cv-forms/cv-artboard/cv-artboard.component';

import { CvService } from './cv-forms/shared/cv.service';

@NgModule({
  declarations: [
    AppComponent,
    CvFormsNavComponent,
    PersonalDataComponent,
    QulificationsComponent,
    ExperiencesComponent,
    CoursesComponent,
    SkillsComponent,
    MainNavComponent,
    CvArtboardComponent,
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
      }]),
    FormsModule
  ],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
