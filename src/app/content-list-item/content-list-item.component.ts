import {Component, Input} from '@angular/core';
import {IContent} from "../IContent";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.scss'
})
export class ContentListItemComponent {
  // @ts-ignore
  @Input() contentItem: IContent;
  // @ts-ignore
  @Input() isEven: boolean;
}
