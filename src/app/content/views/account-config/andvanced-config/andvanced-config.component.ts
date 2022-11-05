import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/api/user/models/user.model';
import { UserService } from 'src/app/api/user/user.service';

@Component({
  selector: 'app-andvanced-config',
  templateUrl: './andvanced-config.component.html',
  styleUrls: ['./andvanced-config.component.scss'],
})
export class AndvancedConfigComponent implements OnInit {
  constructor(private userService: UserService) {}

  user!: UserModel;

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
  }
}
