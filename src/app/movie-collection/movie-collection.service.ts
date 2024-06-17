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

  getObservableContent(): Observable<IContent[]> {
    return of(this.contentItems);
  }

  getContentFromId(id: number): IContent {
    return this.getContent().find(item => item.id === id)!;
  }

  create(item: IContent): Observable<IContent[]> {
    this.contentItems.push(item);
    return this.getObservableContent();
  }

  update(id: number, newItem: IContent): Observable<IContent[]> {
    this.contentItems[id] = newItem;
    return of(this.getContent());
  }

  delete(id: number): Observable<IContent> {
    let deletedItem = this.contentItems[id];
    this.contentItems.splice(id, 1);
    return of(deletedItem);
  }

}
