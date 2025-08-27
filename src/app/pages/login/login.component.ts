import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent]
})
export class LoginComponent {

}
