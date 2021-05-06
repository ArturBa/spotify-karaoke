import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'artur-ba-hotkey-dialog',
  templateUrl: './hotkey-dialog.component.html',
  styleUrls: ['./hotkey-dialog.component.scss'],
})
export class HotkeyDialogComponent {
  readonly symbols = {
    left: '&#8592;', // ←
    right: '&#8594;', // →
    up: '&#8593;', // ↑
    down: '&#8595;', // ↓
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  renderKeyboard(keys: string): string {
    let keysString = keys.split('.');
    // keysString.forEach(keys => {
    //   Object.keys(this.symbols).forEach(symbolKey => {
    //     keys = keys.replace(symbolKey, this.symbols[symbolKey])
    //   })
    // })
    keysString = keysString.map((key) => '<kbd>' + key + '</kbd>');
    return keysString.reduce((p, c) => p + '+' + c);
  }
}
