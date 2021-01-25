import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { WorkComponent } from './work/work.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel'

@NgModule({
  declarations: [
    //components
    HeaderComponent,
    HeroComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCarouselModule
  ],
  exports:[
    //components
    HeaderComponent,
    HeroComponent,
    WorkComponent
  ]
})

export class ComponentsModule { }