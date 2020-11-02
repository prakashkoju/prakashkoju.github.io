import { Component, OnInit } from '@angular/core';
import { Degree } from 'src/app/models/degree';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  panelOpenState = false;
  degrees: Degree[];

  constructor() {}

  ngOnInit() {
    this.degrees = [
      {
        title: 'MSCS',
        degree: 'Master',
        field: 'Computer Science',
        university:
          'Maharishi International University (formally Maharishi University of Management)',
        from: new Date(2019, 2),
        to: new Date(2021, 9),
        gpa: 3.8,
        completed: false,
      },
      {
        title: 'MBA',
        degree: 'Master',
        field: 'Business Administration',
        university: 'Ace Institute of Management (Pokhara University)',
        from: new Date(2012, 2),
        to: new Date(2017, 1),
        gpa: 3.4,
        completed: true,
      },
      {
        title: 'BE',
        degree: 'Bachelor',
        field: 'Engineering in Electronics and Communication',
        university: 'Khwopa Engineering College (Purbanchal University)',
        from: new Date(2005, 7),
        to: new Date(2010, 0),
        gpa: 3.3,
        completed: true,
      },
    ];
  }
}
