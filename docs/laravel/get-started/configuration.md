# Configuration

LaraDumps configuration is stored in `config/laradumps.php` file and can be overriden by your `.env` file.

You can run `php artisan ds:init` at any time to modify the settings via the wizard.

## Configuration options

Below you can read more about each main configuration key.

### Host

The host setting allows your project to communicate with LaraDumps Desktop app.

Enter the host according to your project environment. You may configure a custom host value, if needed.

WIP

<style>
    td::before { display: none }
    <!-- @see https://github.com/docsifyjs/docsify/issues/794 -->
</style>

| **Environment**             |  **Host**            |
|-----------------------------|----------------------|
| Default                     | 127.0.0.1            |
| Docker/Sail                 | host.docker.internal |
| Homestead with VirtualBox   | 10.211.55.2          |
| Homestead with Parallels    | 10.211.55.2          |

> 📝 **Note**: If you are using `Docker` on a `Linux` host, you must perform aditional configuration because. Automatic mapping is not available. Read more [here](https://github.com/laravel/sail/pull/222).

### Auto Invoke

WIP 

---

### SQL Queries

 WIP

---

### Laravel Logs

 WIP

---

### Livewire Components

Tracking Livewire Components can be enabled and disabled in the configuration key `send_livewire_components`.

```php
'send_livewire_components' => true, //enabled
```

To ignore specific components and do not track their state, include the class path in the `ignore_livewire_components` configuration key.

```php
'ignore_livewire_components' => [    
     \App\Http\Livewire\OtherComponent::class,
],
```

---

### Preferred IDE

 WIP

---
