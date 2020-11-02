import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  expand: boolean;

  topics = [
    { title: 'About Me', path: 'aboutme' },
    { title: 'Skills', path: 'skills' },
    { title: 'Work Experience', path: 'experience' },
    { title: 'Academic Projects', path: 'aprojects' },
    { title: 'Education', path: 'education' },
    { title: 'Contact', path: 'contact' },
    { title: 'References', path: 'reference' },
    { title: 'Downloads', path: 'download' },
  ];
  constructor() {}

  ngOnInit(): void {
    this.expand = true;
  }
}
