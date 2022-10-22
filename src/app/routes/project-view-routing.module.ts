import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from '../content/views/projects-view/main-view/main-view.component';
import { ProjectViewComponent } from '../content/views/projects-view/project-view/project-view.component';
import { TaskComponent } from '../content/views/task/task.component';

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
    path: 'project/:name/:code',
    component: TaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsViewRoutingModule {}
