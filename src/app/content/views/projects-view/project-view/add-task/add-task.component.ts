import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/api/tasks/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskServie: TasksService
  ) {}

  project!: string;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.project = params['name'];
    });
  }

  form: FormGroup = new FormGroup({
    priority: new FormControl(''),
    description: new FormControl(''),
  });

  get priority(): string {
    return this.form.get('priority')?.value;
  }

  get description(): string {
    return this.form.get('description')?.value;
  }

  add() {
    const payload = {
      priority: this.priority,
      description: this.description,
    };

    this.taskServie.addTask(payload, this.project).subscribe(() => {
      this.router.navigate(['/dashboard/projects/project', this.project]);
    });
    console.log(this.priority);
    console.log(this.description);
  }

  // //define a function to upload files
  // onUploadFiles(files: any): void {
  //   const data = files.target.files;
  //   console.log(data);

  //   const formData = new FormData();
  //   for (const file of data) {
  //     formData.append('files', file, file.name);
  //   }
  //   this.taskServie.upload(formData).subscribe();
  // }

  // //define a function to download files
  // onDownloadFiles(filename: string): void {
  //   this.taskServie.download(filename).subscribe();
  // }
}
