import { ClearUriDataPipe } from './clear-uri-data.pipe';

describe('ClearUriDataPipe', () => {
  let pipe: ClearUriDataPipe;
  beforeEach(() => {
    pipe = new ClearUriDataPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should clear spotify type uri', () => {
    const uri = 'someURI';
    const spotifyUri = 'spotify:artist:' + uri;
    expect(pipe.transform(spotifyUri)).toEqual(uri);
  });
});
