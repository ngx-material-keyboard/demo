import { Component } from '@angular/core';
import { KeyboardComponent, MdKeyboardRef, MdKeyboardService } from 'ngx-material-keyboard';

@Component({
  selector: 'md-keyboard-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _keyboardRef: MdKeyboardRef<KeyboardComponent>;

  constructor(private _keyboardService: MdKeyboardService) {}

  openDefaultKeyboard() {
    this._keyboardRef = this._keyboardService.open('test', 'Close');
  }

  closeCurrentKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }
  }

}
