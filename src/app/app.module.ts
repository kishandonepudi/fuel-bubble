import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';

@NgModule({
  declarations: [
    AppComponent,
    BubblechartComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [BubblechartComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
