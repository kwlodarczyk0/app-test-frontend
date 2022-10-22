import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/api/projects/projects.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  projects: any;
  id!: number;
  activeProject: any;

  ngOnInit(): void {
    this.projectsService.getUserProjects().subscribe((data) => {
      this.projects = data;
      this.activeProject = this.projects[0];

      //console.log(this.activeProject);
    });
  }

  changeProject(project: any) {
    this.activeProject = project;
  }
}
