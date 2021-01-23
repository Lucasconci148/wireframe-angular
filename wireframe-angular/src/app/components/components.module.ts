import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    //components
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  exports:[
    //components
    HeaderComponent
  ]
})

export class ComponentsModule { }
