import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { ProjectsViewRoutingModule } from 'src/app/routes/project-view-routing.module';
import { ProjectViewComponent } from './project-view/project-view.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsListComponent } from './main-view/projects-list/projects-list.component';
import { ProjectInfoComponent } from './main-view/project-info/project-info.component';
import { AddTaskDialogComponent } from './project-view/add-user-dialog/add-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddProjectDialogComponent } from './main-view/add-project-dialog/add-project-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { AddTaskComponent } from './project-view/add-task/add-task.component';
import { TaskDetailsComponent } from './project-view/task-details/task-details.component';

const PROJECT_COMPONETS = [
  MainViewComponent,
  ProjectViewComponent,
  ProjectsListComponent,
  ProjectInfoComponent,
  AddTaskDialogComponent,
  AddProjectDialogComponent,
  AddTaskComponent,
];

const PROJECT_MODULES = [
  CommonModule,
  ProjectsViewRoutingModule,
  HttpClientModule,
  DragDropModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  declarations: [...PROJECT_COMPONETS, TaskDetailsComponent],
  imports: [...PROJECT_MODULES],
})
export class ProjectsViewModule {}
