import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/authorization/auth.service';
import { LocalStorageService } from 'src/app/api/localStorage/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: LocalStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //if token exist redirect to dashboard
    if (this.storage.getAccesToken()) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //console.log('ok');
      console.log(this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe(
        () => {
          console.log('ok');
          this.router.navigate(['/dashboard']);
        },
        () => {
          console.log('error');
          this.openSnackBar('Invalid username or password', 'X');
          //show some information
        }
      );
    }
  }
}
