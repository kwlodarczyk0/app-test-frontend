import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/authorization/auth.service';
import { LocalStorageService } from 'src/app/api/localStorage/local-storage.service';
import { UserService } from 'src/app/api/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get name() {
    return this.form.get('name')?.value;
  }
  get username() {
    return this.form.get('username')?.value;
  }

  get passowrd() {
    return this.form.get('password')?.value;
  }

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    //console.log('ok');

    if (this.form.valid) {
      this.userService
        .addNewUser(this.name, this.username, this.passowrd)
        .subscribe({
          next: () => {
            console.log('ok');
            this.router.navigate(['/dashboard/user-details']);
          },
          error: () => {
            console.log('error');
            this.openSnackBar('Error, user is not added', 'X');
          },
        });
    }
  }
}
