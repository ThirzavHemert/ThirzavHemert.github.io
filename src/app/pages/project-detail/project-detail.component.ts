import { Component } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {

  imageUrls: string[] = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/400/250',
    'https://picsum.photos/350/250',
    'https://picsum.photos/300/400',
    'https://picsum.photos/340/230',
    'https://picsum.photos/360/260',
    'https://picsum.photos/370/280',
    'https://picsum.photos/390/310'
  ];

  columns: string[][] = [];
  currentFlex: string = '25%'; // Default: 4 columns

  ngOnInit() {
    this.splitIntoColumns(4); // initial column layout
  }

  splitIntoColumns(columnCount: number) {
    this.columns = Array.from({ length: columnCount }, () => []);
    this.imageUrls.forEach((img, i) => {
      this.columns[i % columnCount].push(img);
    });
  }

}
