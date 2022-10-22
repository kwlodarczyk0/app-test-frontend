import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/api/projects/projects.service';
import { UserService } from 'src/app/api/user/user.service';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskDialogComponent } from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
})
export class ProjectViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  name!: string;

  tasks!: any;

  toDoTasks: any = [];
  activeTasks: any = [];
  doneTasks: any = [];

  openDialog() {
    this.dialog.open(AddTaskDialogComponent, {
      data: {
        projectName: this.name,
      },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });

    this.projectService.getProjectByName(this.name).subscribe((res) => {
      this.tasks = res;

      this.tasks.forEach((element: any) => {
        element.tasks.forEach((task: any) => {
          if (task.status === 'Active') {
            this.activeTasks.push(task);
          }
          if (task.status === 'DONE') {
            this.doneTasks.push(task);
          }
        });
      });
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
  }
}
