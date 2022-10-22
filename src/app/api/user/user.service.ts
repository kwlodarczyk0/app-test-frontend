import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = `${environment.api}/api`;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(`${this.API_URL}/users`);
  }

  getCurrentUser() {
    return this.http.get<any>(`${this.API_URL}/user/getUser`);
  }
}
