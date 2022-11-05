import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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

  getUserRoles() {
    return this.http.get(`${this.API_URL}/user/roles`);
  }

  addNewUser(name: string, username: string, password: string) {
    return this.http.post(`${this.API_URL}/user/addUser`, {
      name: name,
      username: username,
      password: password,
    });
  }

  changePassword(
    username: string,
    newPassword: string,
    repeatedNewPassword: string,
    oldPassword: string
  ) {
    return this.http.put(`${this.API_URL}/user/changeUserPassword`, {
      username: username,
      newPassword: newPassword,
      repeatedNewPassword: repeatedNewPassword,
      oldPassword: oldPassword,
    });
  }
}
