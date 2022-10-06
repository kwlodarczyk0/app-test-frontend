import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

class UserToken {}
class Permissions {
  canActivate(): boolean {
    return true;
  }
}

@Injectable({
  providedIn: 'root',
})
class CanActivateTeam implements CanActivate {
  constructor(
    private permissions: Permissions,
    private currentUser: UserToken
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
