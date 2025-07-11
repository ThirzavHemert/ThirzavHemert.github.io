import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-desktop-tl-project',
  templateUrl: './desktop-tl-project.component.html',
  styleUrls: ['./desktop-tl-project.component.scss']
})
export class DesktopTlProjectComponent {

  @Input() isMobileView: boolean = false;
  @Input() project!: Project;
  @Input() index!: number;

  constructor(private router : Router){}

  goToProject(project: Project){
    this.router.navigate(['/projects', project.id], {state: {project}})
  }

}
