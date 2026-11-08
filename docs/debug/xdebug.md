# Xdebug

LaraDumps shows Xdebug breakpoints in the app, with run, step over, step into, stop and expression evaluation. It is not a full Xdebug client: it only reacts to a session that Xdebug starts.

## Requirements

- The [Xdebug](https://xdebug.org/docs/install) extension `^3.0`.
- PHPStorm, to set breakpoints in the IDE. In any other IDE, use `xdebug_break()`.

```ini
[xdebug]
zend_extension="xdebug.so"
xdebug.mode=debug
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
xdebug.start_with_request=trigger
```

::: warning
With [Laravel Herd](https://herd.laravel.com/docs/macos/debugging/xdebug#enabling-xdebug-manually), also set `xdebug.start_upon_error=no` in Herd's `php.ini`.
:::

## Set a breakpoint

Add `xdebug_break()` to your code.

```php
public function sendOrderConfirmation(Order $order): void
{
    xdebug_break(); // [!code ++]

    $this->sendEmail($order->user->email, $order);
}
```

In PHPStorm you can set a breakpoint in the gutter instead. Save the file afterward so PHPStorm writes the breakpoint.

## Start a session

Xdebug starts a session when the request carries a trigger. Use one of:

- The [JetBrains browser extension](https://www.jetbrains.com/help/phpstorm/browser-debugging-extensions.html) with `PHPSTORM` as the IDE. Click **Debug** before the request.
- `XDEBUG_SESSION=1` in your `.env` file. Remove it to stop.

## Settings

LaraDumps listens on `0.0.0.0:9003`. Change it in `laradumps.yaml`:

```yaml
xdebug:
    client_host: 0.0.0.0
    client_port: 9003
```

In Docker or WSL, set the paths so LaraDumps can open the right files:

```yaml
app:
    workdir: /var/www/html/
    project_path: /Users/taylor/Code/shop
    wsl_config: wsl+Ubuntu
```
