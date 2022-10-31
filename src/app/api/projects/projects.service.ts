import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class ProjectsService {
  API_URL = `${environment.api}/api`;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/project/getProject/Essilor`);
  }

  getProjectByName(name: string) {
    return this.http
      .get(`${this.API_URL}/project/getProject/${name}`)
      .pipe(map((data) => [data]));
  }

  getUserProjects() {
    return this.http.get(`${this.API_URL}/project/user-projects`);
  }

  getUsersFromProjects(projectName: string): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.API_URL}/project/project-users/${projectName}`
    );
  }

  getUsersNotInProject(projectName: string): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.API_URL}/project/users-not-in-project/${projectName}`
    );
  }

  addUserToProject(username: any, project: any) {
    return this.http.post(`${this.API_URL}/project/add/add-user-to-project`, {
      username: username,
      projectName: project,
    });
  }

  addNewProject(projectName: any) {
    return this.http.post(`${this.API_URL}/project/add/add-project`, {
      name: projectName,
    });
  }
}
