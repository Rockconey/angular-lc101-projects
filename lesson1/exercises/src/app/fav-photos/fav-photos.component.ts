import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453058849l/26156471.jpg';
  image3 = 'https://i.pinimg.com/originals/71/42/48/7142480934ae21fbeaa75bc7486cad96.jpg';

  constructor() { }

  ngOnInit() {
  }

}