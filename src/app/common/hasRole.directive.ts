import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RoleModel } from '../api/user/models/user.model';
import { UserService } from '../api/user/user.service';

@Directive({
  selector: '[appHasRole]',
})
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() appHasRole!: string;

  //stop$ = new Subject();

  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUserRoles().subscribe((roles: any) => {
      roles.forEach((element: RoleModel) => {
        if (element.name === this.appHasRole) {
          this.isVisible = true;
        }
      });

      if (this.isVisible) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }

  // Clear the subscription on destroy
  ngOnDestroy() {
    //this.stop$.next();
  }
}
