# Installation

Install the desktop app, then the PHP package for your project.

## Desktop app

The app runs on macOS, Linux and Windows.

:::tabs
== macOS

```bash
brew tap laradumps/app
brew install --cask laradumps/app/laradumps
```

Or download the [.dmg](https://github.com/laradumps/app/releases/latest) and drag LaraDumps into `Applications`.

The app is not signed with an Apple certificate. If macOS blocks it on first launch, open `System Settings`, go to `Privacy & Security`, and click `Open Anyway` for LaraDumps. The exact path varies by macOS version.

To upgrade or uninstall:

```bash
brew upgrade --cask laradumps
brew uninstall --cask laradumps
```

== Linux

Snap:

```bash
sudo snap install laradumps
```

AppImage: download `LaraDumps-x.x.x.AppImage` from the [releases page](https://github.com/laradumps/app/releases/latest), then run:

```bash
chmod u+x LaraDumps-*.AppImage && ./LaraDumps-*.AppImage
```

== Windows

Download `LaraDumps-Setup-x.x.x.exe` from the [releases page](https://github.com/laradumps/app/releases/latest) and run the installer.

:::

## Laravel package

Requires PHP 8.2+ and Laravel 11+.

```bash
composer require laradumps/laradumps --dev -W
php artisan ds:init $(pwd)
```

`ds:init` creates `laradumps.yaml` in the project root, sets `app.project_path` to the path you passed, and adds the file to `.gitignore`.

::: warning
If `app.project_path` is empty, set it to your project path by hand. The app uses it to link dumps back to your files.
:::

```yaml
app:
  primary_host: 127.0.0.1
  secondary_host: host.docker.internal
  port: 9191
  project_path: /Users/taylor/Dev/my-app/
config:
  macos_auto_launch: false
observers:
  auto_invoke_app: false
  logs: true
```

See [Configuration](/get-started/configuration) for every option.

## PHP package

For projects without Laravel. Requires PHP 8.2+.

```bash
composer require laradumps/laradumps-core --dev
vendor/bin/laradumps init $(pwd)
```

This creates the same `laradumps.yaml` without the Laravel-only `observers` entries.

## Other languages

- [JavaScript / Node.js](https://github.com/laradumps/laradumps-js)
- [Go](https://github.com/laradumps/laradumps-go)

## Next step

[Send your first dump](/debug/introduction).
