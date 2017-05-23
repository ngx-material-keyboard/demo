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

  isDebug: boolean;

  get keyboardVisible(): boolean {
    return this._keyboardService.isOpened;
  }

  constructor(private _keyboardService: MdKeyboardService) {}

  openDefaultKeyboard(locale = 'en-US', darkTheme) {
    this._keyboardRef = this._keyboardService.open(locale, { darkTheme: darkTheme });
    this._keyboardRef.instance.isDebug = this.isDebug;
  }

  closeCurrentKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }
  }

  toggleDebug(toggle: MdSlideToggleChange) {
    this.isDebug = toggle.checked;
    this._keyboardRef.instance.isDebug = toggle.checked;
  }

}
