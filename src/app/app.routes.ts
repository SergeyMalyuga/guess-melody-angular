import { Routes } from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {LoginComponent} from './pages/login/login.component';
import {NotFoundUrlComponent} from './pages/not-found-url/not-found-url.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundUrlComponent}
];
