import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private projectsUrl = '../assets/files/projects.json';

  constructor(private http: HttpClient) { 
  }

  getData(): Observable<Project[]> {
      return this.http.get<Project[]>(this.projectsUrl);
    }
}
