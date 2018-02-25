import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CvFormLinksComponent } from './cv-form-links/cv-form-links.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { QulificationsComponent } from './qulifications/qulifications.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CoursesComponent } from './courses/courses.component';
import { CvGeneratorComponent } from './cv-generator/cv-generator.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    CvGeneratorComponent,
    CvFormLinksComponent,
    PersonalDataComponent,
    QulificationsComponent,
    ExperiencesComponent,
    CoursesComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'cv-generator', component: CvGeneratorComponent },
      { path: 'cv-forms-links', component: CvFormLinksComponent },
      { path: 'personal-data', component: PersonalDataComponent },
      { path: 'qualifications', component: QulificationsComponent },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'skills', component: SkillsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
