import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskModel } from './models/task.model';

@Injectable()
export class TasksService {
  API_URL = `${environment.api}/api`;
  constructor(private http: HttpClient) {}

  addTask(form: any, projectName: string) {
    return this.http.post<any>(`${this.API_URL}/task/addTask/${projectName}`, {
      priority: form.priority,
      description: form.description,
    });
  }

  getTaskDetails(taskCode: string): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${this.API_URL}/task/getTask/${taskCode}`);
  }

  assignUserToTask(username: any, taskCode: string) {
    console.log(username);
    return this.http.post<any>(
      `${this.API_URL}/task/addUser/${taskCode}`,
      username.name
    );
  }

  updateTaskStatus(taskCode: string, status: string): Observable<TaskModel> {
    return this.http.put<TaskModel>(`${this.API_URL}/task/updateTaskStatus`, {
      taskCode: taskCode,
      status: status,
    });
  }

  addCommentToTask(taskCode: string, text: string | null) {
    return this.http.post<any>(`${this.API_URL}/task/addComment/${taskCode}`, {
      text: text,
    });
  }

  deleteComment(taskCode: string, taskId: number) {
    return this.http.delete<any>(
      `${this.API_URL}/task/removeComment/${taskCode}`,
      {
        body: { id: taskId },
      }
    );
  }

  /////////////////////////////////////////////////////
  //function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.API_URL}/task/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  //function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.API_URL}/task/file/download/${filename}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
    });
  }
}
