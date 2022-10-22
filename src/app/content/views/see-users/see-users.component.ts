import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/api/projects/projects.service';
import { TasksService } from 'src/app/api/tasks/tasks.service';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.scss'],
})
export class SeeUsersComponent implements OnInit {
  constructor(
    private projectsService: ProjectsService,
    private taskService: TasksService
  ) {}

  projects!: any;

  ngOnInit(): void {
    //this.taskService.getNumber().subscribe(console.log);
    this.projectsService.getProjects().subscribe(console.log);
  }
}
