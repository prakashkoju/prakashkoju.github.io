import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent implements OnInit {
  requested = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() {}

  ngOnInit(): void {}
  showInput(): void {
    this.requested = !this.requested;
  }
}
