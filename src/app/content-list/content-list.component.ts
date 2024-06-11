import { Component } from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {IContent} from "../../models/IContent";
import {NgForOf} from "@angular/common";

@Component({
  imports: [
    ContentListItemComponent,
    NgForOf
  ],
  selector: 'app-content-list',
  standalone: true,
  styleUrl: './content-list.component.scss',
  templateUrl: './content-list.component.html'
})
export class ContentListComponent {
  
}
