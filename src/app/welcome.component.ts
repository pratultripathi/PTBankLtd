import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  template: `<h1>Welcome to the Credit Card Application</h1>`,
  styles: [
    `h1 {
      text-align: center;
      margin-top: 20px;
    }`,
  ],
})
export class WelcomeComponent {}