import { Component } from '@angular/core';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {IContent} from "../IContent";
import {NgForOf} from "@angular/common";

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
export class ContentListComponent {
  contentItems: IContent[] = [
    {
      "title" : "The Lord of the Rings",
      "imgSrc" : "src/assets/lotor.png",
      "genre" : "Fantasy",
      "price" : 79.99,
      "link" : "https://www.ebay.ca/itm/256405061634?chn=ps&norover=1&mkevt=1&mkrid=706-159614-043509-9&mkcid=2&mkscid=101&itemid=256405061634&targetid=4586269160971571&device=c&mktype=&googleloc=&poi=&campaignid=414169804&mkgroupid=1322713655057161&rlsatarget=pla-4586269160971571&abcId=9300552&merchantid=136822&msclkid=52a75701f8a4181fd47231617932c427"
    },
    {
      "title" : "Harry Potter",
      "genre" : "Fantasy",
      "imgSrc" : "src/assets/hp.png",
      "price" : 61.48,
      "link" : "https://www.amazon.ca/Harry-Potter-Complete-Collection-Bilingual/dp/B005Q6TB44/ref=asc_df_B005Q6TB44?tag=bingshopdesk-20&linkCode=df0&hvadid=80401879906668&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4584001432824980&psc=1"
    },
    {
      "title" : "Star Wars",
      "genre" : "Fantasy",
      "imgSrc" : "src/assets/starwars.png",
      "price" : 159.95,
      "link" : "https://www.amazon.ca/Star-Wars-Complete-Blu-ray-Bilingual/dp/B015AJOKFG/ref=asc_df_B015AJOKFG?tag=bingshopdesk-20&linkCode=df0&hvadid=79852123977152&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583451672027060&psc=1"
    },
    {
      "title" : "Indiana Jones",
      "genre" : "Adventure",
      "imgSrc" : "src/assets/indianajones.png",
      "price" : 165.67,
      "link" : "https://www.ebay.ca/itm/235294594430?chn=ps&norover=1&mkevt=1&mkrid=706-159614-043509-9&mkcid=2&mkscid=101&itemid=235294594430&targetid=4586269160971573&device=c&mktype=&googleloc=&poi=&campaignid=414169804&mkgroupid=1322713655057161&rlsatarget=pla-4586269160971573&abcId=9300552&merchantid=136822&msclkid=c88a62dc18cc1b3c5c2404bc9a819918"
    },
    {
      "title" : "Pirates of the Caribbean",
      "genre" : "Adventure",
      "imgSrc" : "src/assets/potc.png",
      "price" : 119.99,
      "link" : "https://www.ebay.ca/itm/235549736433?chn=ps&norover=1&mkevt=1&mkrid=706-159614-043509-9&mkcid=2&mkscid=101&itemid=235549736433&targetid=4586269160971571&device=c&mktype=&googleloc=&poi=&campaignid=414169804&mkgroupid=1322713655057161&rlsatarget=pla-4586269160971571&abcId=9300552&merchantid=136822&msclkid=bed0957478581eb324aff314fa32379f"
    }
  ];
}
