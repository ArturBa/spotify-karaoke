# Spotify

## Why it's created

I wanted to try doing something bigger in Angular framework.

I like to sing along songs and spotify doesn't have a lyrics.

I've tried to implement that for them.

## Used resources

- [minilyrics proxy](https://github.com/olee/minilyrics-proxy). Used to get a lyrics from a MiniLyrics. Thanks for your work
- [angular spotify](https://github.com/trungk18/angular-spotify). You need to check that out. This was a big inspiration for my project

## Structure

```bash
.
└── root
    ├── apps
    │   └── angular-spotify
    └── libs
        └── web (dir)
            └── lyrics (dir)
                ├── mini-lyrics
                │   ├── interface (angular:lib MiniLyrics data interfaces)
                │   └── service (angular:lib MiniLyricsService)
                └── view (angular:lib, LyricsComponent)
```
