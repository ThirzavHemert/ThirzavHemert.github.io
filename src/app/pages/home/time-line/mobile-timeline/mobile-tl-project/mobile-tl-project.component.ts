import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-mobile-tl-project',
  templateUrl: './mobile-tl-project.component.html',
  styleUrls: ['./mobile-tl-project.component.scss']
})
export class MobileTlProjectComponent {
    @Input() isMobileView: boolean = false;
    @Input() project!: Project;
    @Input() index!: number;
    formatDescr!: string;
  
    constructor(private router : Router){}

    ngOnInit() {
    this.formatDescr = this.project.short_desc.replace(/\n/g, '<br>');
  }

  
    goToProject(project: Project){
      this.router.navigate(['/projects', project.id], {state: {project}})
    }
}
