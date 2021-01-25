import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {

  slides = [{'image': '../../../assets/imagen.jpg'},{'image': '../../../assets/imagen.jpg'},{'image': '../../../assets/imagen.jpg'}];
}