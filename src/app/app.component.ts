import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";
import {MovieCollectionService} from "./movie-collection/movie-collection.service";
import {IContent} from "../models/IContent";
import {contentItems} from "../data/mock-content";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, ContentListComponent, ContentListItemComponent, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'joshuaThompsonMyFirstAngularApplication';

  contentItem$: Observable<IContent> | undefined;

  constructor(private contentService: MovieCollectionService) {}

  ngOnInit(): void {
    this.contentService.create({
      id: 6, title: 'Spider Man', imgSrc: 'src/assets/spiderman.jpg', genre: 'Action',
      price: 69.98, link: 'https://www.amazon.ca/Spider-Man-Complete-Five-Collection-Blu-ray/dp/B0743KQ4RH/ref=asc_df_B0743KQ4RH?tag=bingshopdesk-20&linkCode=df0&hvadid=80127001873044&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583726555208208&psc=1'
    })
    this.contentItem$ = of(this.contentService.getContentFromId(6));
  }

  protected readonly ContentListComponent = ContentListComponent;

}
