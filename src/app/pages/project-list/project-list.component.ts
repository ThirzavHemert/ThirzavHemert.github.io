import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit{
  projects: any[] = [];

  constructor(private projectService: ProjectService){}

  ngOnInit(): void {
    this.projectService.getData().subscribe(
      data => this.projects = data,
      error => console.error("Error fetching data: ", error)
    );
  }

}
