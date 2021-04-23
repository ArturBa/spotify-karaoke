import { Component, Input } from '@angular/core';

@Component({
  selector: 'artur-ba-song-row',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.scss'],
})
export class SongRowComponent {
  @Input() song: Spotify.Track;
}
