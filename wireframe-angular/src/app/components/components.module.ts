import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { OurTeamComponent } from './our-team/our-team.component';

@NgModule({
  declarations: [
    //components
    HeaderComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  exports:[
    //components
    HeaderComponent,
    OurTeamComponent
  ]
})

export class ComponentsModule { }
