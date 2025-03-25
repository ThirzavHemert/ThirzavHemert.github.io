import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-timeline-project',
  templateUrl: './timeline-project.component.html',
  styleUrls: ['./timeline-project.component.css']
})
export class TimelineProjectComponent {

  @Input() project!: Project;
  @Input() index!: number;

}
