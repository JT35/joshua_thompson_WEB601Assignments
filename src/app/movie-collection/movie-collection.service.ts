import { Injectable } from '@angular/core';
import {IContent} from "../../models/IContent";
import {Observable, of} from "rxjs";
import {contentItems} from "../../data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class MovieCollectionService {

  private contentItems: IContent[] = contentItems;

  getContent(): IContent[] {
    return this.contentItems;
  }

  updateContent(newContent: IContent[]) {
    this.contentItems = newContent;
  }

  fetchData(): Observable<IContent[]> {
    return of(this.getContent());
  }

}
