import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-main-slide',
  templateUrl: './main-slide.component.html',
  styleUrls: ['./main-slide.component.scss']
})
export class MainSlideComponent implements OnInit {
  donimage = './resort_hotels_fires_coast_platform_ladder_evening_26760_1920x1200.jpg';
  imgags = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    interval: {
      timing: 5000,
      initialDelay: 1000
    },
    loop: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor() {}

  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j) {  
        this.carouselTiles[j].push(
          this.imgags[j]
        );
  }
}
