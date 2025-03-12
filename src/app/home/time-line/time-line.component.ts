import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

interface Project {
  title: string;
  year: number;
}

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  isExpanded = false;

  projects: Project[] = [
    { title: 'Project A', year: 2021 },
    { title: 'Project B', year: 2021 },
    { title: 'Project C', year: 2021 },
    { title: 'Project D', year: 2022 },
    { title: 'Project E', year: 2022 },
    { title: 'Project F', year: 2022 },
    { title: 'Project G', year: 2022 },
    { title: 'Project H', year: 2023 },
    { title: 'Project I', year: 2023 },
    { title: 'Project J', year: 2023 },
    { title: 'Project K', year: 2023 },
  ];

  groupedProjects: { [key: number]: string[] } = {};

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
    const projectMap: { [year: number]: string[] } = {};

    this.projects.forEach((project) => {
      if (!projectMap[project.year]) {
        projectMap[project.year] = [];
      }
      projectMap[project.year].push(project.title);
    });

    // Ensure each year's project list has an odd number of items
    for (const year in projectMap) {
      if (projectMap[year].length % 2 === 0) {
        projectMap[year].push('Placeholder'); // Add a filler item
      }
    }

    this.groupedProjects = projectMap;
  }
}
