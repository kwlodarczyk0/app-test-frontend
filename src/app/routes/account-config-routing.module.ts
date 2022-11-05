import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from '../content/views/account-config/add-user/add-user.component';
import { AndvancedConfigComponent } from '../content/views/account-config/andvanced-config/andvanced-config.component';
import { UserMainPageComponent } from '../content/views/account-config/user-main-page/user-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainPageComponent,
    children: [
      {
        path: 'advanced',
        component: AndvancedConfigComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountConfigRoutingModule {}
