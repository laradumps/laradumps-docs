# Xdebug

## Requirements

* [xdebug](https://xdebug.org/docs/install) PHP extension ^3.0
* LaraDumps ^3.5.0

Example `php.ini` configuration:

```ini
[xdebug]
zend_extension="xdebug.so"
xdebug.mode=debug
xdebug.client_host=127.0.0.1
xdebug.client_port=9003
# if you are using xdebug_break()
xdebug.start_with_request=trigger
# if you are using Laravel Herd
xdebug.start_upon_error=no
```

## Laravel Herd

::: warning
If you are using [Laravel Herd](https://herd.laravel.com/docs/macos/debugging/xdebug#enabling-xdebug-manually), set `xdebug.start_upon_error=no` and `xdebug.start_with_request=trigger` in Herd's `php.ini` file.
:::

## Settings

By default, LaraDumps listens on `0.0.0.0:9003` when triggering a debug session.  
You can change this in the `laradumps.yaml` file:

```yaml
xdebug:
    client_host: 0.0.0.0
    client_port: 9003
```

## Docker

If you are using Docker, define `workdir` and `project_path` so LaraDumps can resolve the correct file paths:

```yaml
app:
    workdir: /var/www/html/
    project_path: your_project_path_pwd
    wsl_config: wsl+Ubuntu
```

## Starting Debug

LaraDumps is **not a full-featured Xdebug client**. It does not manage debugging sessions or support interactive breakpoints directly.

Currently, **only PHPStorm is supported** for IDE integration.

To enable breakpoints with PHPStorm:

1. Add the following to your `.env` file:

```dotenv
XDEBUG_SESSION=1
```

2. **Important:** After setting a breakpoint, save the file (`Ctrl+S` or `Cmd+S`) so PHPStorm registers it correctly.

---

Alternatively, you can manually trigger a breakpoint using `xdebug_break()`:

```php
class NotificationService
{
    public function sendOrderConfirmation(Order $order): void
    {
        $recipient = $order->user->email;
        $subject = "Order Confirmation - #{$order->id}";
        $body = "Thank you for your order. Your order ID is #{$order->id} and the total is \${$order->total}.";

        xdebug_break(); // optional manual breakpoint

        $this->sendEmail($recipient, $subject, $body);
    }
}
```
