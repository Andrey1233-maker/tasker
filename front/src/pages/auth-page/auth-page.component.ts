import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../ui';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {

}
