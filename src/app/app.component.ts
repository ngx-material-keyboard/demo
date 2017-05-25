import { Component } from '@angular/core';
import { MdSlideToggleChange } from '@angular/material';
import { MdKeyboardComponent, MdKeyboardRef, MdKeyboardService } from 'ngx-material-keyboard';

@Component({
  selector: 'md-keyboard-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _keyboardRef: MdKeyboardRef<MdKeyboardComponent>;

  darkTheme: boolean;

  duration: number;

  hasAction: boolean;

  isDebug: boolean;

  get keyboardVisible(): boolean {
    return this._keyboardService.isOpened;
  }

  constructor(private _keyboardService: MdKeyboardService) {}

  openKeyboard(locale = 'en-US') {
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

}
