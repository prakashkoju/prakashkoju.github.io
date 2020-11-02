import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { AcademicProjectComponent } from './components/academic-project/academic-project.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DownloadComponent } from './components/download/download.component';

export const componentsInRouter = [
  SummaryComponent,
  NotFoundComponent,
  HomeComponent,
  EducationComponent,
  WorkExperienceComponent,
  SkillComponent,
  AboutMeComponent,
  ContactComponent,
  ReferenceComponent,
  AcademicProjectComponent,
  DownloadComponent,
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: WorkExperienceComponent },
  { path: 'aprojects', component: AcademicProjectComponent },
  { path: 'download', component: DownloadComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
