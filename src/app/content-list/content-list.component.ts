import {Component, OnInit} from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {IContent} from "../../models/IContent";
import {NgForOf} from "@angular/common";
import {MovieCollectionService} from "../movie-collection/movie-collection.service";
import {Observable} from "rxjs";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FilterIContentPipe} from "../filter-icontent.pipe";
import {HighlighterDirective} from "../highlighter.directive";

@Component({
  imports: [
    ContentListItemComponent,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    FilterIContentPipe,
    FilterIContentPipe,
    HighlighterDirective,
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
