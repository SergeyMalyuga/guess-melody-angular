import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {Router} from '@angular/router';
import {AppRoutes} from '../../core/constants/const';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  imports: [
    HeaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

  private router = inject(Router);

  startGameSetup() {
    this.router.navigate([AppRoutes.GAME_SELECTION]);
  }
}
