import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { AppInfoDialog } from './app-info/app-info.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatInputModule],
  declarations: [CookieBannerComponent, AppInfoDialog],
  exports: [CookieBannerComponent, AppInfoDialog],
})
export class SharedViewModule {}
