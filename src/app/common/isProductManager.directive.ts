import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';
import { ProjectsService } from '../api/projects/projects.service';
import { UserService } from '../api/user/user.service';

@Directive({
  selector: '[productManager]',
})
export class isProductManagerDirective implements OnInit, OnDestroy {
  @Input() productManager!: any;

  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private projectService: ProjectsService
  ) {}

  user1: any;

  ngOnInit() {
    console.log(this.productManager);

    this.projectService
      .getProjectByName(this.productManager)
      .subscribe((data1: any) => {
        console.log(data1[0].productManager);

        this.userService.getCurrentUser().subscribe((data: any) => {
          console.log(data);
          if (data1[0].productManager === data.username) {
            console.log('ok');
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }
        });
      });
  }
  ngOnDestroy() {
    //this.stop$.next();
  }
}
