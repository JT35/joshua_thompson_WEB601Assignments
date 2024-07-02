import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {IContent} from "../../models/IContent";
import {NgForOf} from "@angular/common";
import {MovieCollectionService} from "../movie-collection/movie-collection.service";
import {Observable} from "rxjs";
import {contentItems} from "../../data/mock-content";

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

  content?: Observable<IContent[]>;

  constructor(protected contentService: MovieCollectionService) {}

  ngOnInit() {
    this.content = this.contentService.getAllContentItems$();
  }

}
