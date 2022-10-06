import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TasksService } from 'src/app/api/tasks/tasks.service';

@Injectable({
  providedIn: 'root',
})
export class TaskResolver implements Resolve<any> {
  constructor(private taskService: TasksService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.taskService.getNumber();
  }
}
