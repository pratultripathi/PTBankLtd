import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  template: `
    <nav>
      <a routerLink="/welcome">Welcome</a>
    </nav>
  `,
  styles: [
    `nav {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }

    a {
      margin: 0 15px;
      text-decoration: none;
      color: blue;
    }

    a:hover {
      text-decoration: underline;
    }`,
  ],
})
export class NavigationComponent {}