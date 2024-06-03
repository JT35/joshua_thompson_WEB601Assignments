import { Component } from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {IContent} from "../IContent";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [
    ContentListItemComponent
  ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentItems: IContent[] = [
    {
      "title" : "The Lord of the Rings",
      "genre" : "Fantasy",
      "price" : 60.00
    },
    {
      "title" : "Harry Potter",
      "genre" : "Fantasy",
      "price" : 71.41
    },
    {
      "title" : "Star Wars",
      "genre" : "Fantasy",
      "price" : 159.95
    },
    {
      "title" : "Indiana Jones",
      "genre" : "Adventure",
      "price" : 34.95
    },
    {
      "title" : "Pirates of the Caribbean",
      "genre" : "Adventure",
      "price" : 119.99
    }
  ];
}
