import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SeeUsersComponent } from './views/see-users/see-users.component';
import { ContentRoutingModule } from '../routes/content-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarHeaderModule } from './components/navbar-header/navbar-header.module';
import { FooterModule } from './components/footer/footer.module';
import { TaskComponent } from './views/task/task.component';
import { RouterModule } from '@angular/router';

const CONTENT_COMPONENTS = [DashboardComponent, SeeUsersComponent];
const CONTENT_IMPORTS = [
  CommonModule,
  ContentRoutingModule,
  MatSliderModule,
  NavbarHeaderModule,
  FooterModule,
];

@NgModule({
  declarations: [...CONTENT_COMPONENTS, TaskComponent],
  imports: [...CONTENT_IMPORTS, RouterModule],
})
export class ContentModule {}
