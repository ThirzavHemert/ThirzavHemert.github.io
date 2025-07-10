import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-timeline',
  templateUrl: './mobile-timeline.component.html',
  styleUrls: ['./mobile-timeline.component.scss']
})
export class MobileTimelineComponent {
  @Input() groupedProjects: { [year: string]: any[] } = {};

  getYears(): string[] {
    return Object.keys(this.groupedProjects).sort((a, b) => +b - +a);
  }

}
