import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdIconModule, MdTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    // Material modules
    MdIconModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
