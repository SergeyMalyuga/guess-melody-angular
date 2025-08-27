import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {RouterLink} from '@angular/router';
import {AppRoutes} from '../../core/constants/const';

@Component({
  selector: 'app-not-found-url',
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './not-found-url.component.html',
  styleUrl: './not-found-url.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundUrlComponent {

  protected readonly AppRoutes = AppRoutes;
}
