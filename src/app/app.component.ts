import { Component } from '@angular/core';
import { MdKeyboardComponent, MdKeyboardRef, MdKeyboardService } from 'ngx-material-keyboard';

@Component({
  selector: 'md-keyboard-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _keyboardRef: MdKeyboardRef<MdKeyboardComponent>;

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
