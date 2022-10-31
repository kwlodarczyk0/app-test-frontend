import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = `${environment.api}/api`;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(`${this.API_URL}/users`);
  }

  getCurrentUser(): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.API_URL}/user/getUser`);
  }
}
