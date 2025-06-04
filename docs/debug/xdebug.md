# Xdebug

## Requirements

* [xdebug](https://xdebug.org/docs/install) PHP extension ^3.0
* LaraDumps ^3.5.0

::: info
**Breakpoints**: Currently, **only PHPStorm is supported** for IDE integration.
:::

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

## PHPStorm Integration

LaraDumps is **not a full-featured Xdebug client**. It does not manage debugging sessions or support interactive breakpoints directly.

1. **Set a breakpoint in your code** where you want to start debugging.  

2. **Important:** Ensure that the file is saved (`Ctrl+S` or `Cmd+S`) so PHPStorm registers the breakpoint correctly.

3. **Click the "Xdebug" button** in LaraDumps Desktop App to start listening for Xdebug connections.

---

## Using other IDEs

If you are using an IDE other than PHPStorm, you can still use LaraDumps for debugging, but you will need to manually trigger the Xdebug session.

To do this, add `xdebug_break()` in your code where you want to start debugging.

```php
class NotificationService
{
    public function sendOrderConfirmation(Order $order): void
    {
        $recipient = $order->user->email;
        $subject = "Order Confirmation - #{$order->id}";
        $body = "Thank you for your order. Your order ID is #{$order->id} and the total is \${$order->total}.";

        xdebug_break(); // <<-- This will trigger the Xdebug session

        $this->sendEmail($recipient, $subject, $body);
    }
}
```
