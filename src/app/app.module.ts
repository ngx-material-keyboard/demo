import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdIconModule, MdInputModule, MdSelectModule, MdSlideToggleModule, MdTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdKeyboardModule } from '@ngx-material-keyboard/core';

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
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdKeyboardModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
