import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HotkeyDialogComponent } from './hotkey-dialog/hotkey-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [CookieBannerComponent, HotkeyDialogComponent],
  exports: [CookieBannerComponent, HotkeyDialogComponent],
})
export class SharedViewModule {}
