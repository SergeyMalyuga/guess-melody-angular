import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthUser} from '../models/auth-user';
import {APIRoutes, BASE_URL} from '../constants/const';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private http = inject(HttpClient);

  login({email, password}: AuthUser) {
    return this.http.post<User>(`${BASE_URL}/${APIRoutes.LOGIN}`, {email, password})
  }

  getUsers() {
    return this.http.get<User[]>(`${BASE_URL}/${APIRoutes.LOGIN}`);
  }

  removeUser() {
    this.http.delete(`${BASE_URL}/${APIRoutes.LOGOUT}`);
  }
}
