import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  imports: [
    HeaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

}
