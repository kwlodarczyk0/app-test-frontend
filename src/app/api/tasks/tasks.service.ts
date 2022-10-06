import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  getNumber() {
    return of(5);
  }
}
