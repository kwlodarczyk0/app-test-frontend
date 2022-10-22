import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Login } from './models/login.model';
@Injectable()
export class AuthService {
  API_URL = environment.api;
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  login(userData: Login) {
    return this.http
      .post(
        `${this.API_URL}/login?username=${userData.username}&password=${userData.password}`,
        {}
      )
      .pipe(
        map((tokens: any) => {
          this.storage.setAccesToken(tokens);
          return tokens;
        })
      );
  }

  logout() {
    this.storage.removeToken();
    //sessionStorage.removeItem('token');
  }
}
