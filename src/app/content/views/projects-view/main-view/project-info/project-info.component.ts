import { Component, OnInit, Input, ViewChild } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { ProjectModel } from 'src/app/api/projects/models/project.model';
import { ProjectsService } from 'src/app/api/projects/projects.service';
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  @Input() activeProject!: ProjectModel;

  //@ViewChild('ctx') ctx: any;

  chart!: any;

  constructor(private projectService: ProjectsService) {}

  open: any = 0;
  progress: any = 0;
  done: any = 0;

  ngOnInit(): void {
    //console.log(this.activeProject);
    //console.log(this.ctx);

    //this.chart.destroy();
    this.createChart();
  }

  ngOnChanges() {
    this.open = 0;
    this.progress = 0;
    this.done = 0;

    this.activeProject.tasks.forEach((task) => {
      if (task.status === 'OPEN') this.open++;
      else if (task.status === 'IN_PROGRESS') this.progress++;
      else this.done++;
    });
    //this.chart.destroy();

    this.createChart();
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    if (this.activeProject.tasks.length) {
      this.chart = new Chart('MyChart', {
        type: 'pie', //this denotes tha type of chart

        data: {
          labels: ['OPEN', 'IN PROGRESS', 'DONE'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [this.open, this.progress, this.done],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          aspectRatio: 2.5,
          // maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'left',
              /*labels: {
                color: 'rgb(255, 99, 132)',
              },*/
            },
          },
        },
      });
    }
  }

  ngAfterViewInit(): void {}
}
