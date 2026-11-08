# Configuration

Settings live in `laradumps.yaml` in your project root. Create it with `php artisan ds:init $(pwd)` (see [Installation](/get-started/installation)).

In the app, click the signal icon to list your projects, toggle their settings and remove them.

::: warning
Options change between package versions. Keep the app and packages up to date.
:::

## Hosts

`app.primary_host` is the address where the app listens. `app.secondary_host` is a fallback tried when the primary host is unreachable.

```yaml
app:
  primary_host: 127.0.0.1
  secondary_host: host.docker.internal
  port: 9191
```

| Environment | Host |
|---|---|
| Default | `127.0.0.1` |
| Docker or Sail | `host.docker.internal` |
| Homestead (VirtualBox or Parallels) | `10.211.55.2` |
| WSL | the WSL IP (see below) |

On Linux, Docker does not map `host.docker.internal` automatically. See [laravel/sail#222](https://github.com/laravel/sail/pull/222).

### WSL

If your project runs inside WSL (for example `php artisan serve`), use the WSL IP as the host. Run `ipconfig` in PowerShell and read `IPv4 Address` under `Ethernet adapter vEthernet (WSL)`.

```yaml
app:
  primary_host: 172.21.48.1
```

The IP changes on every restart. Update the file when it does.

## Open files from WSL

To open files in VS Code Remote WSL, set the project path and distro name:

```yaml
app:
  project_path: C:\dan\projects\
  wsl_config: wsl+Ubuntu
```

Find the distro with `wsl -l -v`. Find the path with `pwd` inside your WSL project folder.

## Auto-invoke

When `observers.auto_invoke_app` is `true`, the app opens and takes focus on every new dump. It is `false` by default.

```yaml
observers:
  auto_invoke_app: true
```

Send a [quiet dump](/debug/php#quiet-dump) to skip this for a single call.

## macOS auto-launch

Opens the app if it is not running when you call `ds()`:

```yaml
config:
  macos_auto_launch: true
```
