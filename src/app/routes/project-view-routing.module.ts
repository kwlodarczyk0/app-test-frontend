import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from '../content/views/projects-view/main-view/main-view.component';
import { AddTaskComponent } from '../content/views/projects-view/project-view/add-task/add-task.component';
import { ProjectViewComponent } from '../content/views/projects-view/project-view/project-view.component';
import { TaskDetailsComponent } from '../content/views/projects-view/project-view/task-details/task-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
  },
  {
    path: 'project/:name',
    component: ProjectViewComponent,
  },
  {
    path: 'project/:name/addTask',
    component: AddTaskComponent,
  },
  {
    path: 'project/:name/:code',
    component: TaskDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsViewRoutingModule {}
