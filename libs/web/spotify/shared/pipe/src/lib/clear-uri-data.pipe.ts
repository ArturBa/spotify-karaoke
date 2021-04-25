import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearUriData',
})
export class ClearUriDataPipe implements PipeTransform {
  transform(uri: string): unknown {
    const splitted = uri.split(':');
    return splitted[splitted.length - 1];
  }
}
