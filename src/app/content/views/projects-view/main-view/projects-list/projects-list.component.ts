import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: any;

  @Output() changeProjectEvent = new EventEmitter<any>();

  changeActiveProject(project: any) {
    this.changeProjectEvent.emit(project);
  }

  constructor() {}

  ngOnInit(): void {}
}
