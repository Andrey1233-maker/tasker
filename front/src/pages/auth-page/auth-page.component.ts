import { Component } from '@angular/core';
import { ButtonComponent, InputComponent } from '../../ui';
import { AuthPageService } from './auth-page.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  providers: [AuthPageService],
})
export class AuthPageComponent {
  constructor(
    private authPageService: AuthPageService,
  ) {}

  onClick() {
    console.log(this.authPageService)
    this.authPageService.login('123', '123')
  }
}
