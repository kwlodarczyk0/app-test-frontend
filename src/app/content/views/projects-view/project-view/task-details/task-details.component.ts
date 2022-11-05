import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { ProjectsService } from 'src/app/api/projects/projects.service';
import { TaskModel } from 'src/app/api/tasks/models/task.model';
import { TasksService } from 'src/app/api/tasks/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService,
    private projectService: ProjectsService
  ) {}

  id!: string;
  projectName!: string;

  task!: TaskModel;

  user = new FormControl<any>('');
  options: any = [];
  filteredOptions!: Observable<any>;
  commentForm = new FormControl('');

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['code'];
      this.projectName = params['name'];
    });

    this.taskService.getTaskDetails(this.id).subscribe((data) => {
      this.task = data;
      console.log(data);
    });

    this.projectService
      .getUsersFromProjects(this.projectName)
      .subscribe((usernames: string[]) => {
        usernames.forEach((username: string) => {
          this.options.push({ name: username });
        });
      });

    this.filteredOptions = this.user.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  addTask() {
    this.taskService
      .assignUserToTask(this.user.value, this.id)
      .subscribe((data) => {
        this.task = data;
      });
  }

  addComment() {
    //console.log('addd');
    //console.log(this.commentForm.value);
    this.taskService
      .addCommentToTask(this.id, this.commentForm.value)
      .subscribe((data) => {
        this.task = data;
      });
  }

  deleteComment(id: any) {
    this.taskService.deleteComment(this.id, id).subscribe((data) => {
      this.task = data;
    });
  }

  //////////////////////////////////////
  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option: any) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
