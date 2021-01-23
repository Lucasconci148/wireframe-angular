import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public showMenu: boolean = false;

  clickOverlay() {
    this.showMenu = false;
  }

  openMenu() {
    this.showMenu = true;
  }
}
