import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {IContent} from "../../models/IContent";
import {NgForOf} from "@angular/common";
import {MovieCollectionService} from "../movie-collection/movie-collection.service";

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
export class ContentListComponent implements OnInit {

  content: IContent[] = [];

  constructor(protected contentService: MovieCollectionService) {}

  ngOnInit() {
    this.content = this.contentService.getContent();
  }

  updateContent(newContent: IContent[]) {
    this.contentService.updateContent(newContent);
    this.content = this.contentService.getContent();
  }

}
