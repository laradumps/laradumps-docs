# Updating LaraDumps

The app checks for updates on start and tells you when a new version is out.

## Desktop app

- **Linux and Windows**: accept the prompt. The app downloads and installs the update.
- **macOS**: accept the prompt. The app downloads the `.dmg` and opens it. Drag LaraDumps into `Applications` to replace the old version.
- **Homebrew**: run `brew upgrade --cask laradumps`.

## PHP packages

```bash
composer update laradumps/laradumps --dev
```

Use `laradumps/laradumps-core` for non-Laravel projects. Keep the app and the packages on recent versions: new `laradumps.yaml` options need a matching app.
