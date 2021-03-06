import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlbumComponent } from './album/album.component';

const routes: Routes = [{ path: '', component: AlbumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
