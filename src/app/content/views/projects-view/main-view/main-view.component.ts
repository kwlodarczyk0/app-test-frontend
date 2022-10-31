import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/api/localStorage/local-storage.service';
import { ProjectsService } from 'src/app/api/projects/projects.service';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private projectsService: ProjectsService,
    public dialog: MatDialog
  ) {}

  projects: any;
  id!: number;
  activeProject: any;

  ngOnInit(): void {
    this.projectsService.getUserProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.activeProject = this.projects[0];
      },
      error: () => {
        this.storage.removeToken();
        this.router.navigate(['/']);
      },
    });
  }

  openDialog() {
    this.dialog.open(AddProjectDialogComponent);
  }

  changeProject(project: any) {
    this.activeProject = project;
  }
}
