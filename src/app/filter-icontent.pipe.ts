import { Pipe, PipeTransform } from '@angular/core';
import {IContent} from "../models/IContent";

@Pipe({
  name: 'filterIContent',
  standalone: true
})
export class FilterIContentPipe implements PipeTransform {

  transform(contentList: IContent[], type?: string) {
    return contentList.filter(content => content.type === type);
  }

}
