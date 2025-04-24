import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent {
  @Input() project!: Project;
}
