import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {AppRoutes} from '../../core/constants/const';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrl: './game-selection.component.css',
  imports: [
    HeaderComponent,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameSelectionComponent {

  protected readonly AppRoutes = AppRoutes;
}
