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

  openKeyboard() {
    this._keyboardRef = this._keyboardService.open('test', 'Close');
  }

  closeKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }
  }

}
