import {Component, Input} from '@angular/core';
import {IContent} from "../IContent";

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.scss'
})
export class ContentListItemComponent {
  // @ts-ignore
  @Input() contentItem: IContent;
}
