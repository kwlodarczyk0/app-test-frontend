import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getAccesToken() {
    return localStorage.getItem('token');
  }

  setAccesToken(tokens: any) {
    console.log(tokens);
    localStorage.setItem('token', tokens?.access_token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
