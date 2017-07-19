import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MdSlideToggleChange } from '@angular/material';
import { IKeyboardLayout, MD_KEYBOARD_LAYOUTS, MdKeyboardComponent, MdKeyboardRef, MdKeyboardService } from 'ngx-material-keyboard';

@Component({
  selector: 'md-keyboard-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _keyboardRef: MdKeyboardRef<MdKeyboardComponent>;

  darkTheme: boolean;

  duration: number;

  hasAction: boolean;

  isDebug: boolean;

  defaultLocale: string;

  layout: string;

  layouts: {
    name: string;
    layout: IKeyboardLayout;
  }[];

  get keyboardVisible(): boolean {
    return this._keyboardService.isOpened;
  }

  constructor(private _keyboardService: MdKeyboardService,
              @Inject(LOCALE_ID) public locale,
              @Inject(MD_KEYBOARD_LAYOUTS) private _layouts) {}

  ngOnInit() {
    this.defaultLocale = ` ${this.locale}`.slice(1);
    this.layouts = Object.keys(this._layouts)
                         .map((name: string) => (
                           {
                             name: name,
                             layout: this._layouts[name]
                           }
                         ))
                         .sort((a, b) => a.layout.name.localeCompare(b.layout.name));
  }

  openKeyboard(locale = this.defaultLocale) {
    this._keyboardRef = this._keyboardService.open(locale, {
      darkTheme: this.darkTheme,
      duration: this.duration,
      hasAction: this.hasAction,
      isDebug: this.isDebug
    });
  }

  closeCurrentKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }
  }

  toggleDebug(toggle: MdSlideToggleChange) {
    this.isDebug = toggle.checked;
    this._keyboardRef.isDebug = toggle.checked;
  }

  toggleDarkTheme(toggle: MdSlideToggleChange) {
    this.darkTheme = toggle.checked;
    this._keyboardRef.darkTheme = toggle.checked;
  }

  toggleAction(toggle: MdSlideToggleChange) {
    this.hasAction = toggle.checked;
    this._keyboardRef.hasAction = toggle.checked;
  }

}
