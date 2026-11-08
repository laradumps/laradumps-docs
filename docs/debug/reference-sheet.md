# Reference sheet

Every helper and method, with a link to the page that explains it.

## PHP

| Call | Description | Details |
|---|---|---|
| `ds($a, $b)` | Dump one or more values | [Dump](/debug/php#dump) |
| `ds($a)->die()` | Dump and stop execution | [Dump and die](/debug/php#dump-and-die) |
| `dsd($a)` | Alias for dump and die | [Dump and die](/debug/php#dump-and-die) |
| `dsq($a)` | Dump without bringing the app forward | [Quiet dump](/debug/php#quiet-dump) |
| `->label('Name')` | Name the dump | [Label](/debug/php#label) |
| `->toScreen('name', $raiseIn)` | Send to a screen; optional delay in seconds | [Screens](/debug/php#screens) |
| `->s('name')` | Alias for `toScreen()` | [Screens](/debug/php#screens) |
| `->toScreenWindow('name')` | Send to a screen in a new window | [Screens](/debug/php#screens) |
| `->w('name')` | Alias for `toScreenWindow()` | [Screens](/debug/php#screens) |
| `ds()->clear()` | Clear all screens | [Clear screens](/debug/php#clear-screens) |
| `->info()` / `->blue()` | Blue tag | [Color tag](/debug/php#color-tag) |
| `->success()` / `->green()` | Green tag | [Color tag](/debug/php#color-tag) |
| `->danger()` / `->red()` | Red tag | [Color tag](/debug/php#color-tag) |
| `->warning()` / `->orange()` | Orange tag | [Color tag](/debug/php#color-tag) |
| `->dark()` / `->black()` | Black tag | [Color tag](/debug/php#color-tag) |
| `->color('red')` | Tag with a color by name | [Color tag](/debug/php#color-tag) |
| `ds()->time('ref')`, `ds()->stopTime('ref')` | Measure execution time | [Time](/debug/php#time) |
| `ds()->table($data, 'name')` | Show data in a searchable table | [Table](/debug/php#table) |
| `->isJson()` | Validate and format a JSON string | [JSON](/debug/php#json) |
| `->contains('text', caseSensitive: false, wholeWord: false)` | Check if the dump contains a string | [Contains](/debug/php#contains) |
| `ds()->phpinfo()` | Show PHP settings | [PHPInfo](/debug/php#phpinfo) |
| `ds()->benchmark(...$closures)` | Time closures and flag the fastest | [Benchmark](/debug/php#benchmark) |

## Laravel

| Call | Description | Details |
|---|---|---|
| `ds()->routes()` | Show routes in a table | [Routes](/debug/laravel#routes) |
| `ds()->model($user)` | Show a model's attributes and relationships | [Eloquent models](/debug/laravel#eloquent-models) |
| `str('Hello')->ds()` | Dump a `Stringable` and keep chaining | [Macros and Blade](/debug/laravel#macros-and-blade) |
| `collect($items)->ds()` | Dump a collection and keep chaining | [Macros and Blade](/debug/laravel#macros-and-blade) |
| `User::query()->ds()` | Dump an Eloquent builder's query | [Macros and Blade](/debug/laravel#macros-and-blade) |
| `@ds($var)` | Dump from a Blade view | [Macros and Blade](/debug/laravel#macros-and-blade) |
| `ds()->queriesOn('label')`, `ds()->queriesOff()` | Start and stop capturing SQL queries | [Queries](/debug/laravel#queries) |
| `ds()->markdown('# Hello')` | Render markdown as HTML | [Table and Markdown](/debug/laravel#table-and-markdown) |
| `ds()->mailable(new TestMail())` | Show mail details and an HTML preview | [Mail](/debug/laravel#mail) |
| `ds()->httpOn('label')`, `ds()->httpOff()` | Start and stop capturing HTTP client requests | [HTTP client](/debug/laravel#http-client) |
| `ds()->commandsOn('label')`, `ds()->commandsOff()` | Start and stop capturing Artisan commands | [Artisan commands](/debug/laravel#artisan-commands) |
| `ds()->scheduledCommandOn('label')`, `ds()->scheduledCommandOff()` | Start and stop capturing scheduled commands | [Scheduled commands and gates](/debug/laravel#scheduled-commands-gates-and-jobs) |
| `ds()->gateOn('label')`, `ds()->gateOff()` | Start and stop capturing gate and policy checks | [Scheduled commands and gates](/debug/laravel#scheduled-commands-gates-and-jobs) |
| `ds()->cacheOn('label')`, `ds()->cacheOff()` | Start and stop capturing cache events | [Cache](/debug/laravel#cache) |
| `ds()->withContext('key')` | Show Laravel Context, optionally filtered by key | [Context](/debug/laravel#context) |
| `ds()->startProfile('label')`, `ds()->stopProfile()` | Start and stop a profile | Not documented yet |
| `ds()->profile($callback, 'label')` | Profile a closure and return its result | Not documented yet |
| `ds()->measure($name, $callback, $type, $metadata)` | Measure a closure inside a profile | Not documented yet |
| `ds()->flushProfile()`, `ds()->captureProfileForTermination()` | Send or finalize the current profile data | Not documented yet |

## Livewire and Volt

| Call | Description | Details |
|---|---|---|
| `#[Ds]` | Listen to a Livewire component | [Pin a component](/debug/livewire#pin-a-component) |
| `booted(fn () => ds($this))` | Listen to a Volt component | [Pin a Volt component](/debug/livewire#pin-a-volt-component) |

## Pest

| Call | Description | Details |
|---|---|---|
| `expect($value)->ds()` | Dump an expectation value | [Expectations](/debug/pest#expectations) |
| `$response->ds()` | Dump a test response | [Test responses](/debug/pest#test-responses) |
