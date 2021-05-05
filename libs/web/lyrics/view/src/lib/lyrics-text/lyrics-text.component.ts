import { Component, Input } from '@angular/core';
import { Lyrics } from '@artur-ba/web/lyrics/model';

@Component({
  selector: 'artur-ba-lyrics-text',
  templateUrl: './lyrics-text.component.html',
  styleUrls: ['./lyrics-text.component.scss'],
})
export class LyricsTextComponent {
  @Input() lyrics: Lyrics;
  @Input() currentTime: number;
  readonly linesAround = 3;

  get script(): string[] {
    const currentTime = (this.currentTime - this.lyrics.offset) / 1000;
    let index = this.lyrics.script.findIndex(
      (script) => script.start > currentTime
    );
    if (index === -1) {
      index = this.lyrics.script.length;
    }
    const startSlice = index < this.linesAround ? 0 : index - this.linesAround;
    const endSlice =
      index > this.lyrics.script.length - this.linesAround
        ? this.lyrics.script.length
        : index + this.linesAround;
    const returnLines = this.getTrackInfo(this.linesAround - index);

    this.lyrics.script.slice(startSlice, endSlice).forEach((line) => {
      returnLines.push(line.text);
    });
    return returnLines;
  }

  protected getTrackInfo(lines: number): string[] {
    if (lines <= 0) {
      return [];
    } else if (lines == 1) {
      return [this.lyrics.title];
    } else {
      return [this.lyrics.artist, this.lyrics.title];
    }
  }
}
