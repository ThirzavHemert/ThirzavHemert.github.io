import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  isExpanded = false;

  projects: Project[] = [
    { title: 'Project A', year: 2021, description: 'Description of Project A', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project B', year: 2021, description: 'Description of Project B', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project C', year: 2021, description: 'Description of Project C', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project D', year: 2022, description: 'Description of Project D', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project E', year: 2022, description: 'Description of Project E', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project F', year: 2022, description: 'Description of Project F', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project G', year: 2022, description: 'Description of Project G', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project H', year: 2023, description: 'Description of Project H', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project I', year: 2023, description: 'Description of Project I', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project J', year: 2023, description: 'Description of Project J', image: 'https://loremflickr.com/200/200?random=1' },
    { title: 'Project K', year: 2023, description: 'Description of Project K', image: 'https://loremflickr.com/200/200?random=1' },
  ];

  groupedProjects: { [year: number]: Project[] } = {};

  ngOnInit() {
    this.groupProjectsByYear();
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
          title: "Placeholder",
          year: parseInt(year),
          description: "",
          image: ""
        }); // Add a full placeholder project
      }
    }
  
    this.groupedProjects = projectMap;
    console.log(this.groupedProjects); // Debugging
  }
  
}
