import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppInfoDialogComponent } from './app-info/app-info.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatInputModule],
  declarations: [CookieBannerComponent, AppInfoDialogComponent],
  exports: [CookieBannerComponent, AppInfoDialogComponent],
})
export class SharedViewModule {}
