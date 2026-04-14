import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NavigationComponent } from './navigation.component';

export const routes: Route[] = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
];
