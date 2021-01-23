import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DesktopViewComponent } from './desktop/desktop-view.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
      //views
      DesktopViewComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
  ],
  exports:[
      //views
      DesktopViewComponent
  ]
})

export class ViewsModule { }
