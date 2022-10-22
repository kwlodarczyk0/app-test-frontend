import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class TasksService {
  constructor() {}

  getNumber() {
    return of(5);
  }
}
