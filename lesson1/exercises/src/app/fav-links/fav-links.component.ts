import { Component, OnInit } from '@angular/core';
import { UrlObject } from 'url';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
      
      favLinks = ["http://www.granta.com", "http://revisionisthistory.com", "http://electricliterature.com"];
  constructor() {
    
   }

  ngOnInit() {
  }

}
