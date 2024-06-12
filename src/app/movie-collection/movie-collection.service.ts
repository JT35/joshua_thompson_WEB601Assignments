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

  getContentAt(id: number): Observable<IContent> {
    return of(this.getContent().find(item => item.id === id)!);
  }

  create(item: IContent): Observable<IContent[]> {
    this.contentItems.push(item);
    this.updateContent(this.getContent());
    return of(this.getContent());
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

  updateContent(newContent: IContent[]) {
    this.contentItems = newContent;
  }

  fetchData(): Observable<IContent[]> {
    return of(this.getContent());
  }

}
