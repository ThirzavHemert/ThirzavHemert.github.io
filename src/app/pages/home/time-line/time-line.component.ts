import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  isExpanded = false;

  projects: Project[] = [];

  groupedProjects: { [year: number]: Project[] } = {};

  constructor(private projectService: ProjectService){}

  ngOnInit() {
    this.projectService.getData().subscribe(
        data => {
          console.log("Received data:", data);
          this.projects = data,
          this.groupProjectsByYear();
        },
        error => console.error("Error fetching data: ", error)
      );
    

  }

  getYears(): number[] {
    return Object.keys(this.groupedProjects).map(year => +year); // Convert to numbers
  }
  
  toggleTimeline(): void {
    this.isExpanded = !this.isExpanded;
  }

  groupProjectsByYear() {
    const projectMap: { [year: number]: Project[] } = {}; // Store full objects
  
    this.projects.forEach((project) => {
      if (!projectMap[project.year]) {
        projectMap[project.year] = [];
      }
      projectMap[project.year].push(project); // Store full project object
    });
  
    // Ensure each year's project list has an odd number of items
    for (const year in projectMap) {
      if (projectMap[year].length % 2 === 0) {
        projectMap[year].push({
          id: -1,
          title: "Placeholder",
          year: parseInt(year),
          short_desc: "",
          description: "",
          key_features: [],
          technical_desc: "",
          task: "",
          language: [],
          tools: [],
          client: "",
          image_head: "",
          image_thumbnail: "",
          images: [],
        }); // Add a full placeholder project
      }
    }
  
    this.groupedProjects = projectMap;
    console.log(this.groupedProjects); // Debugging
  }
  
}
