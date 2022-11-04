import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/api/projects/projects.service';
import { UserService } from 'src/app/api/user/user.service';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { TasksService } from 'src/app/api/tasks/tasks.service';
import { CdkAriaLive } from '@angular/cdk/a11y';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AnimateTimings } from '@angular/animations';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {
  @ViewChild('open') open: any;
  @ViewChild('progress') progress: any;
  @ViewChild('done') done: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private userService: UserService,
    private taskService: TasksService,
    public dialog: MatDialog
  ) {}

  name!: string;

  tasks!: any;

  openTasks: any = [];
  inProgressTasks: any = [];
  doneTasks: any = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });

    this.projectService.getProjectByName(this.name).subscribe(
      (res) => {
        this.tasks = res;

        this.tasks.forEach((element: any) => {
          element.tasks.forEach((task: any) => {
            if (task.status === 'OPEN') {
              this.openTasks.push(task);
            }
            if (task.status === 'IN_PROGRESS') {
              this.inProgressTasks.push(task);
            }
            if (task.status === 'DONE') {
              this.doneTasks.push(task);
            }
          });
        });
      },
      (err) => {
        this.router.navigate(['/error']);
      }
    );
  }
  openDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      data: {
        projectName: this.name,
      },
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.changeStatus(event.container);
  }

  changeStatus(container: any) {
    const taskCode: string = container.data[0].code;

    if (container.element.nativeElement === this.open.nativeElement) {
      this.taskService.updateTaskStatus(taskCode, 'OPEN').subscribe();
    } else if (
      container.element.nativeElement === this.progress.nativeElement
    ) {
      this.taskService.updateTaskStatus(taskCode, 'IN_PROGRESS').subscribe();
    } else {
      this.taskService.updateTaskStatus(taskCode, 'DONE').subscribe();
    }
  }
}
