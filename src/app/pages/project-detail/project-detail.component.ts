import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {

  project!: Project;

  columns: string[][] = [];
  imageUrls: string[] = [];
  formatDescr!: string;
  currentFlex: string = '25%'; // Default: 4 columns

  constructor(private router: Router){
    const nav = this.router.getCurrentNavigation();
    this.project = nav?.extras?.state?.['project'];
    console.log(this.project)
  }


  ngOnInit() {
    this.imageUrls = this.project.images
    this.splitIntoColumns(4); // initial column layout
    this.formatDescr = this.project.description.replace(/\n/g, '<br><br>');
  }

  splitIntoColumns(columnCount: number) {
    this.columns = Array.from({ length: columnCount }, () => []);
    this.imageUrls.forEach((img, i) => {
      this.columns[i % columnCount].push(img);
    });
  }

}
