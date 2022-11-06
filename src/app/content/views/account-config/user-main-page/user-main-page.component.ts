import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/app/api/user/models/user.model';
import { UserService } from 'src/app/api/user/user.service';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.scss'],
})
export class UserMainPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  user!: UserModel;
  panelOpenState = false;

  form: FormGroup = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    repeatedNewPassword: new FormControl(''),
  });

  get oldPassword() {
    return this.form.get('oldPassword')?.value;
  }
  get newPassword() {
    return this.form.get('newPassword')?.value;
  }

  get repeatedNewPassword() {
    return this.form.get('repeatedNewPassword')?.value;
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  changePassword() {
    console.log('xd');
    console.log(this.repeatedNewPassword);

    this.userService
      .changePassword(
        this.user.username,
        this.newPassword,
        this.repeatedNewPassword,
        this.oldPassword
      )
      .subscribe({
        next: () => {
          console.log('ok');
          this.form.reset();
        },
        error: (err) => {
          //console.log(err.error.errors[0]);
          //console.log(err.errors);
          this.openSnackBar(err.error.errors[0], 'X');
          this.form.reset();
        },
      });
  }
}
