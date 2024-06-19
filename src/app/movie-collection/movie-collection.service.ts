import { Injectable } from '@angular/core';
import {IContent} from "../../models/IContent";
import {map, Observable, of} from "rxjs";
import {contentItems} from "../../data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class MovieCollectionService {

  private contentItems: IContent[] = contentItems;

  public getContent(): IContent[] {
    return this.contentItems;
  }

  public getAllContentItems$(): Observable<IContent[]> {
    return of(this.contentItems);
  }

  public getContentItemById$(id: number): Observable<IContent> {
    // @ts-ignore
    return this.getAllContentItems$().pipe(
      map(items =>
        items.find(item => item.id === id))
    );
  }

  create(item: IContent): Observable<IContent[]> {
    this.contentItems.push(item);
    return this.getAllContentItems$();
  }

  delete(id: number): Observable<IContent> {
    let deletedItem= this.getContentItemById$(id);
    this.contentItems.splice(id, 1);
    return deletedItem;
  }

}
