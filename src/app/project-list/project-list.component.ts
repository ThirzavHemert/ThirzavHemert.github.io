import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  //Temp mock data
  projects = [
    {
      id: 0,
      title: 'Shiba Inu App',
      year: 2020,
      description: 'A platform for Shiba lovers to share stories and photos. ',
      image: 'https://picsum.photos/300/300?random=1'
    },
    {
      id: 1,
      title: 'Mountain Explorer',
      year: 2020,
      description: 'Track your mountain hikes with this lightweight app.',
      image: 'https://picsum.photos/300/300?random=2'
    },
    {
      id: 2,
      title: 'Recipe Finder',
      year: 2021,
      description: 'Find recipes with whatever you have in your fridge.',
      image: 'https://picsum.photos/300/300?random=3'
    },
    {
      id: 3,
      title: 'Shiba Inu App',
      year: 2020,
      description: 'A platform for Shiba lovers to share stories and photos.',
      image: 'https://picsum.photos/300/300?random=1'
    },
    {
      id: 4,
      title: 'Mountain Explorer',
      year: 2020,
      description: 'Track your mountain hikes with this lightweight app.',
      image: 'https://picsum.photos/300/300?random=2'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      year: 2021,
      description: 'Find recipes with whatever you have in your fridge.',
      image: 'https://picsum.photos/300/300?random=3'
    }
  ];

}
