import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.scss']
})

export class DesktopViewComponent {

  public proportion;

  constructor() {
    this.onResize();
  };

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    const innerWidth = window.innerWidth;
    console.log('width', innerWidth, this.proportion);

    if(innerWidth < 900) {
      this.proportion = 45;
    };
  }


}
