import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountConfigRoutingModule {}
