import {Injectable} from '@angular/core';
import {Token} from '../models/token';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthService {

  private AUTH_TOKEN_KEY_NAME = 'auth-token';

  setAuthToken(token: Token) {
    localStorage.setItem(this.AUTH_TOKEN_KEY_NAME, token)
  }

  getToken(): Token {
    const token = localStorage.getItem(this.AUTH_TOKEN_KEY_NAME);
    return token ?? '';
  }

  removeToken() {
    localStorage.removeItem(this.AUTH_TOKEN_KEY_NAME);
  }
}
