import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {
  @Input() project!: Project;
  toolLangList: string[] = []

  ngOnInit(): void {
    this.formatTools()
  }

  constructor(private router : Router){}
  
    goToProject(project: Project){
      this.router.navigate(['/projects', project.id], {state: {project}})
    }
  

  // combine tools and languages to display 3 of them
  formatTools(): void {
    this.project.language.forEach(el => {
      this.toolLangList.push(el)
    });

    let i = 0
    while(this.toolLangList.length < 3){
      console.log("Prioject " + this.project.tools[i])
      this.toolLangList.push(this.project.tools[i])
      i++;
    }  
  }
}
