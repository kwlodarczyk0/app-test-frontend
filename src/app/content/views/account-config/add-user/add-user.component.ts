import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/api/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
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

  onSubmit() {
    console.log('ok');
    this.userService
      .addNewUser(this.name, this.username, this.passowrd)
      .subscribe({
        next: () => {
          console.log('ok');
        },
      });
  }
}
