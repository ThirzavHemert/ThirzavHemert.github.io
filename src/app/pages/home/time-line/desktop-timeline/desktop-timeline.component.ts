import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Project } from '../../../../models/project.model';
import { ProjectService } from 'src/app/project.service';


@Component({
  selector: 'app-desktop-timeline',
  templateUrl: './desktop-timeline.component.html',
  styleUrls: ['./desktop-timeline.component.scss']
})
export class DesktopTimelineComponent {
    isExpanded = false;
  
    projects: Project[] = [];
    @Input() groupedProjects: { [year: string]: any[] } = {};
  
    constructor(private projectService: ProjectService) {}
  
    ngOnInit() {
      // this.checkScreenSize();
    }
  
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      // this.checkScreenSize();
    }
  
    // checkScreenSize() {
    //   this.isMobileView = window.innerWidth <= 550; // mobile breakpoint
    // }
  
    getYears(): string[] {
    return Object.keys(this.groupedProjects).sort((a, b) => +b - +a);
  }
  
    toggleTimeline(): void {
      this.isExpanded = !this.isExpanded;
    }

}
