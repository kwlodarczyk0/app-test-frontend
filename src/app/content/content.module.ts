import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SeeUsersComponent } from './views/see-users/see-users.component';
import { ContentRoutingModule } from '../routes/content-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarHeaderModule } from './components/navbar-header/navbar-header.module';
import { FooterModule } from './components/footer/footer.module';
import { RouterModule } from '@angular/router';
import { ProjectsService } from '../api/projects/projects.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TasksService } from '../api/tasks/tasks.service';
import { HttpInterceptorService } from '../common/http-interceptor.service';
import { AuthService } from '../api/authorization/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const CONTENT_COMPONENTS = [DashboardComponent, SeeUsersComponent];
const CONTENT_IMPORTS = [
  HttpClientModule,
  CommonModule,
  ContentRoutingModule,
  MatSliderModule,
  NavbarHeaderModule,
  FooterModule,
  RouterModule,
  MatIconModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [...CONTENT_COMPONENTS],
  imports: [...CONTENT_IMPORTS],
  providers: [
    ProjectsService,
    TasksService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class ContentModule {}
