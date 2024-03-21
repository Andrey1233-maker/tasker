import { Injectable } from '@angular/core';

@Injectable()
export class AuthPageService {
  constructor() {}

  login(email: string, password: string) {
    alert(email);
  }
}
