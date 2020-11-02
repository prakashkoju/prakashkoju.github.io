import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

skills = [
    'Java8',
    'Spring framework',
    'Springboot',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'AJAX',
    'jQuery',
    'MySQL',
    'MSSQL',
    'Oracle',
    'Docker',
    'Kafka',
    'RESTful API',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
