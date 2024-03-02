# Laravel Observers

## Introduction

...

* Only available for [laradumps/laradumps](https://github.com/laradumps/laradumps)

```php
composer require laradumps/laradumps --dev -W
```


### Logs

The Desktop App will receive and dump [Laravel Logs](https://laravel.com/docs/9.x/logging) entries whenever you enable the [Log](/get-started/configuration?id=laravel-logs) feature.

LaraDumps also provides a one-click internet search on Error Log messages. This is very convenient for exceptions and general error messages.

```php
use Illuminate\Support\Facades\Log;

Log::info('Your message', ['0' => 'Your Context']);

Log::error('Your message', ['0' => 'Your Context']);
```

---

### Queries


To debug SQL queries, you must place the database call within the `queriesOn()` and `queriesOff()` methods.

You are required to enable [SQL Query Listening](/get-started/configuration?id=sql-queries) for this feature to work properly.

For example:

```php
use App\Models\User;

ds()->queriesOn('checking a user query');

    User::query()->where('id', 20)->get();

ds()->queriesOff();
```

#### Query Macro

* Only available for [laradumps/laradumps](https://github.com/laradumps/laradumps)

You can also chain a `ds()` method before the query execution and, it will be dumped in the Desktop App:

```php
use App\Models\User;

User::query()->where('id', 20)
    ->ds()
    ->get();
```

::: warning
The macro feature doesn't require SQL Queries to be enabled in the configuration file.
:::

---

### Mailable

Displays mail details and the HTML preview for an instance of a `Illuminate\Mail\Mailable` class.

```php
ds()->mailable(new \App\Mail\TestMail());
```

### HTTP Requests

Captures and displays all the properties of HTTP Requests within the `httpOn()` and `httpOff()` methods.

```php
use \Illuminate\Support\Facades\Http;

ds()->httpOn();
    Http::get('https://jsonplaceholder.typicode.com/todos/1');
ds()->httpOff();
```

---

### Artisan Command

Captures and displays the called Artisan commands with their arguments, options and exit code.

```php
use Illuminate\Support\Facades\Artisan;

ds()->commandsOn('running a command');
    Artisan::call('inspire');
ds()->commandsOff();

```

---

### Jobs

Captures and displays all information of Jobs ran within the `showJob()` and `stopShowingJob()` methods.

```php
ds()->jobsOn('Optional-Label');
    dispatch(new \App\Jobs\TestJob());
ds()->jobsOff();
```

---

### Cache

Captures and displays [Cache](https://laravel.com/docs/9.x/cache#introduction) information loaded within the `cacheOn()` and `cacheOff()` methods.

```php
ds()->cacheOn('My cache');

    // SET
    cache()->set('feature', 'Cache Observer');

    cache()->remember('name', 10, function() {
        return 'Anand Pilania';
    });

    // HIT
    cache()->get('name');

    // FORGET
    cache()->forget('feature');

    // MISSED
    cache()->get('feature');

ds()->cacheOff();
```

---

### Stringable Macro

Displays the current string in a [Stringable Macro](https://laravel.com/docs/9.x/helpers#strings-method-list)

```php
use Illuminate\Support\Str;

Str::of('Hello')
    ->append(' World')
    ->ds();
```

---

### Collection Macro

Displays the current state of a [Collection Macro](https://laravel.com/docs/9.x/collections#main-content)

```php
collect(['hello', 'world'])
    ->ds('original input')
    ->map(fn($string) => ucfirst($string))
    ->ds('capitalize result');
```

---

### Routes

You can use the `routes()` method to list all Routes in a [table](/debug/usage?id=table) format.

You may configure LaraDumps to [exclude](/get-started/configuration?id=routes) specific routes from the dump output.

```php
ds()->routes();
```


### Auto-Clear

LaraDumps can automatically clear the screen on page reload. You must include the Auto-Clean Blade directive.

```html
  <!-- Scripts -->
  @if(app()->environment('local'))
      @dsAutoClearOnPageReload
  @endif
</body>
```

This feature is disabled by default. To enable it, change the environment key `DS_AUTO_CLEAR_ON_PAGE_RELOAD` to `true`.

```shell
DS_AUTO_CLEAR_ON_PAGE_RELOAD=true #enabled
```

---
