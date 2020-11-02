import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact = {
    email: 'prakash.koju@outlook.com',
    LinkedIn: 'https://www.linkedin.com/in/prakashkoju/',
    github: 'https://prakashkoju.github.io/',
  };
  constructor(private clip: Clipboard) {}

  ngOnInit(): void {}

  copyClip(value: string): void {
    this.clip.copy(value);
  }
}
