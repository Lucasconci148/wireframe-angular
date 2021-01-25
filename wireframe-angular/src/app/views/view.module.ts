import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DesktopViewComponent } from './desktop/desktop-view.component';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
      //views
      DesktopViewComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    MatIconModule
  ],
  exports:[
      //views
      DesktopViewComponent
  ]
})

export class ViewsModule { }
