import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})

export class OurTeamComponent {

  public team = [
    { title: '', description: '', img: ''},
    { title: '', description: '', img: ''},
    { title: '', description: '', img: ''},
    { title: '', description: '', img: ''},
  ];
}
