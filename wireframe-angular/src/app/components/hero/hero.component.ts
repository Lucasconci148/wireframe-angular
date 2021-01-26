import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {

  @Input() proportion: number;

  public slides = [
    {'image': '../../../assets/imagen.jpg'},
    {'image': '../../../assets/imagen.jpg'},
    {'image': '../../../assets/imagen.jpg'}
  ];
}