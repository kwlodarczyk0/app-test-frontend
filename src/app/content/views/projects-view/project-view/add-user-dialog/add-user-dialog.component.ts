import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, startWith, map } from 'rxjs';
import { ProjectsService } from 'src/app/api/projects/projects.service';
import { UserService } from 'src/app/api/user/user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss'],
})
export class AddTaskDialogComponent implements OnInit {
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
    /*this.userService.getUsers().subscribe((users: any) => {
      //odfiltrować ludzi aktualnie będących w projekcie
      const projectName = this.dialogData.projectName;
      //console.log(users);

      users.forEach((user: any) => {
        //console.log(user.username);
        this.options.push({ name: user.username });
      });
    });*/

    this.projectService
      .getUsersNotInProject(this.dialogData.projectName)
      .subscribe((usernames: string[]) => {
        usernames.forEach((username: string) => {
          this.options.push({ name: username });
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

  addUserToProject() {
    const projectName = this.dialogData.projectName;
    const username = this.myControl.value.name;
    //zabezpiecznie po forncie, kontrolka musi być required

    this.projectService.addUserToProject(username, projectName).subscribe(
      () => {
        this.openSnackBar('User sucessfully added', 'X');
        setTimeout(() => {
          this.closeDialog();
        }, 2000);
      },
      () => {
        this.openSnackBar('Error, something gone wrong', 'X');
      }
    );
  }
}
