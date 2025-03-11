# Xdebug

## Requirements

* [xdebug](https://xdebug.org/docs/install) php extension ^3.0
* LaraDumps ^3.5.0

See `php.ini` example:
```ini
[xdebug]
zend_extension="xdebug.so"
xdebug.mode=debug
xdebug.client_host=127.0.0.1      
xdebug.client_port=9003
xdebug.start_with_request=trigger
```

## Settings

By default, LaraDumps will try to connect to xdebug on client_host `0.0.0.0` and port `9003` after you click the "**debug**" icon on the right side,
If you want to change the address you can set it in `laradumps.yaml`

`laradumps.yaml`
```yaml
xdebug:
    client_host: 0.0.0.0
    client_port: 9002
```

## Docker

If you are using docker in a project, you must define workdir and project_path so that LaraDumps can identify the source of the file to assemble the code block and resolve or click on the line.

```yaml{2-3}
app:
    workdir: /var/www/html/
    project_path: your_project_path_pwd
    wsl_config: wsl+Ubuntu
```

## Starting Debug

To set the breakpoint, you must go to the line you want to capture and add [xdebug_break()](https://xdebug.org/docs/all_functions#xdebug_break)

Example:

```php{9}
class NotificationService
{
    public function sendOrderConfirmation(Order $order): void
    {
        $recipient = $order->user->email;
        $subject = "Order Confirmation - #{$order->id}";
        $body = "Thank you for your order. Your order ID is #{$order->id} and the total is \${$order->total}.";

        xdebug_break(); // add breakpoint here
        
        $this->sendEmail($recipient, $subject, $body);
    }
}
```

