# Laravel Tools

## Introduction

The features listed on this page are available only for applications built on the [Laravel Framework](https://laravel.com) and require the [LaraDumps Laravel](/get-started/installation.html?id=desktop-app#laravel-package) package to work properly.

## Routes

You can use the `routes()` method to list all Routes in a [table](/debug/php.html?id=table#table) format.

You may configure LaraDumps to [exclude](/get-started/configuration?id=routes) specific routes from the dump output.

```php
ds()->routes();
```

## Elloquent Model

You can use the `model()` method to view [Eloquent Model's](https://laravel.com/docs/eloquent#introduction) Attributes and Relationships.

```php{5}
use App\Models\User;

$firstUser = User::first();

ds()->model($firstUser);
```

## Stringable Macro

Displays the current string in a [Stringable Macro](https://laravel.com/docs/12.x/strings)

```php{5}
use Illuminate\Support\Str;

Str::of('Hello')
    ->append(' World')
    ->ds();
```

## Collection Macro

Displays the current state of a [Collection Macro](https://laravel.com/docs/collections#main-content)

```php{4}
collect(['hello', 'world'])
    ->ds('original input')
    ->map(fn($string) => ucfirst($string))
    ->ds('capitalize result');
```

## Query Macro

You can also chain a `ds()` method before the query execution and, it will be dumped in the Desktop App:

```php{4}
use App\Models\User;

User::query()->where('name', 'Luan')
    ->ds()
    ->get();
```

::: warning
The macro feature doesn't require SQL Queries to be enabled in the configuration file.
:::

## Queries

To debug SQL queries, you must place the database call within the `queriesOn()` and `queriesOff()` methods.

For example:

```php{3,7}
use App\Models\User;

ds()->queriesOn('checking a user query');

User::query()->where('id', 20)->get();

ds()->queriesOff();
```

![Output](/_media/app_queries_example.png)

## Ignorning Queries

Sometimes you may want to exclude certain queries from the debug dump. This could be helpful if you are looking for a specific query among a lot of others.

To ignore queries, you first need to publish the LaraDumps Laravel's config file. To do so, run the following command:

```shell
php artisan vendor:publish --tag=laradumps-config
```

Now, you can configure the recently created file `config/laradumps.php`, adding the queries or route patterns that you do not want to see in your debug dump.

```php
//config/laradumps.php

return [
    'queries' => [
        'ignore_sql_patterns' => [
            'select name from `flights`',// [!code ++]
        ],
        'ignore_routes_patterns' => [
            'horizon/*',// [!code ++]
            'telescope/*',// [!code ++] 
        ],
    ],
];
```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **QUERIES**, or set `observers.queries` : `true` in **laradumps.yaml**
:::

## Table

You can use the `table()` method to display dumps in a table with a built-in search bar.

To build a table, you can pass an instace of an Elloquent Model or any `iterable $data` as the first argument. Next, you may add an optional `string $name` for the table name.

```php{5}
use App\Models\User;

$allUsers = User::all(['id', 'name', 'email']);

ds()->table($allUsers, 'my users table');
```

## Markdown

Displays the markdown rendered as HTML.

```php
ds()->markdown('# hello world!');
```

## Logs

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

## Mailable

Displays mail details and the HTML preview for an instance of a `Illuminate\Mail\Mailable` class.

```php
ds()->mailable(new \App\Mail\TestMail());
```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **MAIL**, or set `observers.mail` : `true` in **laradumps.yaml**
:::

## HTTP Requests

Captures and displays all the properties of HTTP Requests within the `httpOn()` and `httpOff()` methods.

```php{3,5}
use \Illuminate\Support\Facades\Http;

ds()->httpOn();
    Http::get('https://jsonplaceholder.typicode.com/todos/1');
ds()->httpOff();
```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **HTTP**, or set `observers.http` : `true` in **laradumps.yaml**
:::

## Artisan Command

Captures and displays the called Artisan commands with their arguments, options and exit code.

```php{3,5}
use Illuminate\Support\Facades\Artisan;

ds()->commandsOn('running a command');
    Artisan::call('inspire');
ds()->commandsOff();

```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **COMMANDS**, or set `observers.commands` : `true` in **laradumps.yaml**
:::

## Jobs

To monitor and dump executed Jobs, just enable the "Jobs" option inside your project settings in the desktop app.

Alternativelly, you may edit the option `observers` > `jobs` in your project's `laradumps.yaml` file.

```yaml
#laradumps.yaml

observers:
  jobs: false
```

::: info
**To Listen globally:**

* In Desktop App, choose your project and toggle: **JOBS**, or set `observers.jobs` : `true` in **laradumps.yaml**
:::

## Cache

Captures and displays [Cache](https://laravel.com/docs/cache#introduction) information loaded within the `cacheOn()` and `cacheOff()` methods.

```php{1,17}
ds()->cacheOn('My cache');

    // SET
    cache()->set('feature', 'Cache Observer');

    cache()->remember('name', 10, fn() => 'Anand Pilania');

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

## Context

Displays the current state of [Laravel Context](https://laravel.com/docs/context)

* Enable in the desktop app:
  `Settings → Layout tab → Show context (true)`

### Basic Usage

```php{5}
use Illuminate\Support\Facades\Context;

Context::set('key', 'value');

ds()->withContext();
```

### Filtering Context by Key

Pass a key to display only the specified context value:

```php{5}
use Illuminate\Support\Facades\Context;

Context::set('key', 'value');

ds()->withContext('key');
```

::: info
Enable automatic context display for every dump by adding this to laradumps.yaml:

```yaml
extra:
  context: true
```

:::
