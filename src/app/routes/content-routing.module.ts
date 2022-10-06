import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../content/views/dashboard/dashboard.component';
import { SeeUsersComponent } from '../content/views/see-users/see-users.component';
import { TaskComponent } from '../content/views/task/task.component';
import { TaskResolver } from '../content/views/task/task.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/see',
        pathMatch: 'full',
      },
      {
        path: 'see',
        component: SeeUsersComponent,
      },
      {
        path: 'task/:id',
        component: TaskComponent,
        /*resolve: {
          task: TaskResolver,
        },*/
      },
      {
        path: 'user-details',
        loadChildren: () =>
          import('../content/views/account-config/account-config.module').then(
            (m) => m.AccountConfigModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
