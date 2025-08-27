import {Routes} from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {LoginComponent} from './pages/login/login.component';
import {NotFoundUrlComponent} from './pages/not-found-url/not-found-url.component';
import {GameSelectionComponent} from './pages/game-selection/game-selection.component';
import {AuthGuard} from './core/guards/auth-guard';
import {AppRoutes} from './core/constants/const';

export const routes: Routes = [
  {path: AppRoutes.WELCOME, component: WelcomeComponent},
  {path: AppRoutes.LOGIN, component: LoginComponent},
  {path: AppRoutes.GAME_SELECTION, component: GameSelectionComponent, canActivate: [AuthGuard]},
  {path: AppRoutes.GAME, children: []},
  {path: '**', component: NotFoundUrlComponent}
];
