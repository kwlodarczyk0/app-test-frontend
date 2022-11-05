import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/api/user/models/user.model';
import { UserService } from 'src/app/api/user/user.service';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.scss'],
})
export class UserMainPageComponent implements OnInit {
  constructor(private userService: UserService) {}

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
          console.log(err);
          this.form.reset();
        },
      });
  }
}
