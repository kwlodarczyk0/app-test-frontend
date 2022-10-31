import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/api/projects/projects.service';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss'],
})
export class AddProjectDialogComponent implements OnInit {
  myControl = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    private projectService: ProjectsService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addNewProject() {
    const projectName = this.myControl.value;
    this.projectService.addNewProject(projectName).subscribe(
      () => {
        this.openSnackBar('Project sucessfully added', 'X');
        setTimeout(() => {
          this.closeDialog();
          this.router.navigate([`/dashboard/projects/project/${projectName}`]);
        }, 1000);
      },
      () => {
        this.openSnackBar('Error, the new project was not added', 'X');
      }
    );
  }
}
