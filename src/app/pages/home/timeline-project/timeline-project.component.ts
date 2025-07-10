import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-project',
  templateUrl: './timeline-project.component.html',
  styleUrls: ['./timeline-project.component.scss']
})
export class TimelineProjectComponent {

  @Input() isMobileView: boolean = false;
  @Input() project!: Project;
  @Input() index!: number;

  constructor(private router : Router){}

  goToProject(project: Project){
    this.router.navigate(['/projects', project.id], {state: {project}})
  }

}
