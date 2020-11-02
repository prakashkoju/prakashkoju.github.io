import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  date = new Date();
  constructor(private datePipe: DatePipe) {
    this.datePipe.transform(this.date, 'MM-dd-yyyy');
  }

  ngOnInit(): void {}
}
