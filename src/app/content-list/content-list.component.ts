import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentItems: IContent[] = [
    {
      "title" : "The Lord of the Rings",
      "genre" : "Fantasy",
      "price" : 30.99
    },
    {
      "title" : "Harry Potter",
      "genre" : "Fantasy",
      "price" : 80.99
    },
    {
      "title" : "Star Wars",
      "genre" : "Fantasy",
      "price" : 19.99
    },
    {
      "title" : "Indiana Jones",
      "genre" : "Adventure",
      "price" : 19.99
    },
    {
      "title" : "Pirates of the Caribbean",
      "genre" : "Adventure",
      "price" : 19.99
    }
  ];
}
