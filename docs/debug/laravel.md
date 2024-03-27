# Laravel Observers

## Introduction

...

* Only available for [laradumps/laradumps](https://github.com/laradumps/laradumps)

```php
composer require laradumps/laradumps --dev -W
```


### Logs

The Desktop App will receive and dump [Laravel Logs](https://laravel.com/docs/logging) entries whenever you enable the [Log](/get-started/configuration?id=laravel-logs) feature.

```php
use Illuminate\Support\Facades\Log;

Log::info('Your message', ['0' => 'Your Context']);

Log::error('Your message', ['0' => 'Your Context']);
```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **LOGS**, or set `observers.logs` : `true` in **laradumps.yaml**
:::

> Laravel 11 [Log Context](https://laravel.com/docs/11.x/context) was supported

---

### Queries

To debug SQL queries, you must place the database call within the `queriesOn()` and `queriesOff()` methods.

For example:

```php
use App\Models\User;

ds()->queriesOn('checking a user query');

User::query()->where('id', 20)->get();

ds()->queriesOff();
```

![Output](/_media/app_queries_example.png)

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **QUERIES**, or set `observers.queries` : `true` in **laradumps.yaml**
:::

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

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **MAIL**, or set `observers.mail` : `true` in **laradumps.yaml**
:::

---

### HTTP Requests

Captures and displays all the properties of HTTP Requests within the `httpOn()` and `httpOff()` methods.

```php
use \Illuminate\Support\Facades\Http;

ds()->httpOn();
    Http::get('https://jsonplaceholder.typicode.com/todos/1');
ds()->httpOff();
```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **HTTP**, or set `observers.http` : `true` in **laradumps.yaml**
:::

---

### Artisan Command

Captures and displays the called Artisan commands with their arguments, options and exit code.

```php
use Illuminate\Support\Facades\Artisan;

ds()->commandsOn('running a command');
    Artisan::call('inspire');
ds()->commandsOff();

```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **COMMANDS**, or set `observers.commands` : `true` in **laradumps.yaml**
:::

---

### Jobs

Captures and displays all information of Jobs ran within the `jobsOn()` and `jobsOff()` methods.

```php
ds()->jobsOn('Optional-Label');
    dispatch(new \App\Jobs\TestJob());
ds()->jobsOff();
```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **JOBS**, or set `observers.jobs` : `true` in **laradumps.yaml**
:::

---

### Cache

Captures and displays [Cache](https://laravel.com/docs/cache#introduction) information loaded within the `cacheOn()` and `cacheOff()` methods.

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

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **CACHE**, or set `observers.cache` : `true` in **laradumps.yaml**
:::

---

### Stringable Macro

Displays the current string in a [Stringable Macro](https://laravel.com/docs/helpers#strings-method-list)

```php
use Illuminate\Support\Str;

Str::of('Hello')
    ->append(' World')
    ->ds();
```

---

### Collection Macro

Displays the current state of a [Collection Macro](https://laravel.com/docs/collections#main-content)

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
