import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntary-disclosure',
  templateUrl: './voluntary-disclosure.component.html',
  styleUrls: ['./voluntary-disclosure.component.scss'],
})
export class VoluntaryDisclosureComponent implements OnInit {
  ethnicity = 'Non Hispanic or Latino';
  race = 'Asian';
  veteranStatus: 'I am not a veteran';
  gender = 'Male';
  disability = "No, I don't have disability, or a history of having disability";
  constructor() {}

  ngOnInit() {}
}
