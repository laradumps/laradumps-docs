# Laravel

These helpers need a Laravel app with the [LaraDumps Laravel package](/get-started/installation) installed.

## Routes

List your routes in a [table](/debug/php). Pass strings to skip routes whose URI contains them.

```php
ds()->routes();
ds()->routes('horizon', 'telescope');
```

## Eloquent models

Show a model's attributes and relationships. You can pass several models.

```php
ds()->model(User::first());
```

## Macros and Blade

Chain `ds()` on strings, collections and query builders. Each returns the original value, so the chain keeps working.

```php
Str::of('Hello')->append(' World')->ds();

collect(['hello', 'world'])
    ->ds('original input')
    ->map(fn ($string) => ucfirst($string))
    ->ds('capitalized');

User::query()->where('name', 'Luan')->ds()->get();
```

The query macro works even when the SQL observer is off. In Blade, use the `@ds()` directive:

```blade
@ds('Hello World')
```

## Table and Markdown

`table()` takes a model or any iterable, and an optional name. The app adds a search bar. `markdown()` renders Markdown as HTML.

```php
ds()->table(User::all(['id', 'name', 'email']), 'my users');

ds()->markdown('# hello world!');
```

## Observers

Observers dump Laravel events for you. Turn one on globally with its toggle in your project settings in the app, or in `laradumps.yaml`. Or wrap a block of code with the `On` and `Off` methods, which work even when the toggle is off.

| Observer | `laradumps.yaml` key | Scoped methods |
|---|---|---|
| Queries | `observers.queries` | `queriesOn()`, `queriesOff()` |
| Slow queries | `observers.slow_queries` | None |
| Logs | `observers.logs` (on by default) | None |
| Mail | `observers.mail` | None |
| HTTP client | `observers.http` | `httpOn()`, `httpOff()` |
| Artisan commands | `observers.commands` | `commandsOn()`, `commandsOff()` |
| Scheduled commands | `observers.scheduled_commands` | `scheduledCommandOn()`, `scheduledCommandOff()` |
| Gates and policies | `observers.gate` | `gateOn()`, `gateOff()` |
| Jobs | `observers.jobs` | None |
| Cache | `observers.cache` | `cacheOn()`, `cacheOff()` |

```yaml
# laradumps.yaml
observers:
  queries: true
```

The `On` methods that take a label (`queriesOn`, `httpOn`, `commandsOn`, `cacheOn`, `scheduledCommandOn`, `gateOn`) tag the dumps with it.

## Queries

Wrap the database calls you want to see.

```php
ds()->queriesOn('checking a user query');

User::query()->where('id', 20)->get();

ds()->queriesOff();
```

To hide noise, publish the config file and add patterns.

```bash
php artisan vendor:publish --tag=laradumps-config
```

```php
// config/laradumps.php
return [
    'queries' => [
        'ignore_sql_patterns' => [
            'select name from `flights`',
        ],
        'ignore_routes_patterns' => [
            'horizon/*',
            'telescope/*',
        ],
    ],
];
```

- `ignore_sql_patterns`: skips queries whose SQL contains the text. `*` works as a wildcard. Matching is case-insensitive.
- `ignore_routes_patterns`: skips queries run while serving a request whose path matches. `*` works as a wildcard, and the pattern must match the whole path.

To flag full table scans, set `queries.explain: true` in `laradumps.yaml`. LaraDumps then runs `EXPLAIN FORMAT=JSON` on `select` queries, which requires MySQL or MariaDB.

### Slow queries

Enable `observers.slow_queries`. A query is slow at or above `threshold_in_ms`, which defaults to 500.

```yaml
# laradumps.yaml
observers:
  slow_queries: true

slow_queries:
  threshold_in_ms: 500
```

When the queries observer is also on, slow queries are not sent twice.

## Logs

With `observers.logs` on (the default), `Log` entries appear in the app, with the request, the executed queries and, for exceptions, a code snippet. [Laravel Context](https://laravel.com/docs/context) is included.

```php
Log::info('Order shipped', ['order_id' => 42]);
Log::error('Payment failed', ['order_id' => 42]);
```

Choose which levels to receive under `logs` in `laradumps.yaml`. All are `true` except `alert`.

```yaml
logs:
  error: true
  alert: false
  vendor: true
  deprecated_message: true
  boost_info: false
```

- `vendor`: only messages that contain "vendor".
- `deprecated_message`: only messages that contain "deprecated".
- `boost_info`: Laravel Boost browser logs, hidden by default.

## Mail

Preview a `Mailable` with its recipients and rendered HTML.

```php
ds()->mailable(new \App\Mail\OrderShipped());
```

With `observers.mail` on, LaraDumps also dumps every sent mail and mail notification.

## HTTP client

Dump requests and responses made with `Http` inside the block.

```php
ds()->httpOn();
Http::get('https://jsonplaceholder.typicode.com/todos/1');
ds()->httpOff();
```

## Artisan commands

Dump commands with their arguments, options and exit code.

```php
ds()->commandsOn('running a command');
Artisan::call('inspire');
ds()->commandsOff();
```

## Scheduled commands, gates and jobs

These have no extra helpers beyond the toggles in the table above.

```yaml
# laradumps.yaml
observers:
  scheduled_commands: true
  gate: true
  jobs: true
```

The jobs observer reports a job as queued, processing, processed or failed.

## Cache

Dump hits, misses, writes and forgets inside the block.

```php
ds()->cacheOn('My cache');

cache()->set('feature', 'Cache Observer');
cache()->get('feature');
cache()->forget('feature');
cache()->get('feature');

ds()->cacheOff();
```

## Context

Dump [Laravel Context](https://laravel.com/docs/context), or only the keys you pass.

```php
Context::set('key', 'value');

ds()->withContext();
ds()->withContext('key');
```

The app shows it when **Show context** is on in its settings. To attach context to every dump, set `extra.context: true` in `laradumps.yaml`.

## Next step

Debug [Livewire](/debug/livewire) components.
