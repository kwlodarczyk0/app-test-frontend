import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, startWith, map } from 'rxjs';
import { ProjectsService } from 'src/app/api/projects/projects.service';
import { UserService } from 'src/app/api/user/user.service';
import { AddTaskDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-set-manager-dialog',
  templateUrl: './set-manager-dialog.component.html',
  styleUrls: ['./set-manager-dialog.component.scss'],
})
export class SetManagerDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private userService: UserService,
    private projectService: ProjectsService,
    private _snackBar: MatSnackBar
  ) {}

  myControl = new FormControl<any>('');
  options: any = [];
  filteredOptions!: Observable<any>;

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      const projectName = this.dialogData.projectName;

      users.forEach((user: any) => {
        this.options.push({ name: user.username });
      });
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option: any) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  addManagerToProject() {
    const projectName = this.dialogData.projectName;
    const username = this.myControl.value.name;
    //zabezpiecznie po forncie, kontrolka musi być required

    this.projectService.setProductManager(projectName, username).subscribe({
      next: () => {
        this.openSnackBar('User sucessfully added', 'X');
        setTimeout(() => {
          this.closeDialog();
        }, 2000);
      },
      error: () => {
        this.openSnackBar('Error, something gone wrong', 'X');
      },
    });
  }
}
