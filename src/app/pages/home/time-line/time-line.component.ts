import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ProjectService } from 'src/app/project.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  isExpanded = false;
  isMobileView = false;

  projects: Project[] = [];
  groupedProjects: { [year: number]: Project[] } = {};

  constructor(private projectService: ProjectService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.projectService.getData().subscribe(
      data => {
        this.projects = data;
        this.groupProjectsByYear();
      },
      error => console.error("Error fetching data: ", error)
    );
    // this.checkScreenSize();

    this.breakpointObserver
      .observe([Breakpoints.Small])
      .subscribe(result => {
        this.isMobileView = result.matches;
      });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.checkScreenSize();
  // }

  // checkScreenSize() {
  //   this.isMobileView = window.innerWidth <= 550;
  // }

  getYears(): number[] {
    return Object.keys(this.groupedProjects).map(year => +year);
  }

  toggleTimeline(): void {
    this.isExpanded = !this.isExpanded;
  }

  groupProjectsByYear() {
    const projectMap: { [year: number]: Project[] } = {};

    this.projects.forEach(project => {
      if (!projectMap[project.year]) {
        projectMap[project.year] = [];
      }
      projectMap[project.year].push(project);
    });

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
        });
      }
    }
    this.groupedProjects = projectMap;
  }
}

