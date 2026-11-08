# PHP tools

These tools are framework agnostic and work in any PHP project. For framework-specific tools, see [Laravel](/debug/laravel) and [Livewire](/debug/livewire). For tests, see [Pest](/debug/pest).

## Dump

Pass one or more values to `ds()`. Execution continues.

```php
$name    = 'Taylor';
$country = ['code' => 'US', 'name' => 'United States'];

ds($name);
ds($name, $country);
```

<DumpPreview code="ds($name, $country);" file="routes/web.php:5" type="dump" :output="'(string) Taylor\n\narray:2 [\n  &quot;code&quot; => &quot;US&quot;\n  &quot;name&quot; => &quot;United States&quot;\n]'" />

## Dump and die

`ds()->die()` or `dsd()` dumps, then stops execution. Both work like `dd()`.

```php
ds($order)->die();
dsd($order);
```

## Quiet dump

By default the app comes to the front on every dump. Use `dsq()` to dump without bringing it forward, or turn off [Auto-Invoke](/get-started/configuration#auto-invoke).

```php
foreach ($products as $product) {
    dsq('Checking product #' . $product['id']); // app stays in the background

    if ($product['price'] < 0) {
        ds('Invalid price in product #' . $product['id']); // app is invoked
    }
}
```

`dsq()` has an effect only when Auto-Invoke is on.

## Label

`label()` names a dump so you can find it among similar ones.

```php
ds($creator)->label('Creator of LaraDumps');
ds($other)->label('Creator of Laravel');
```

## Screens

`toScreen()` and its alias `s()` send a dump to a named screen. Screens group related dumps.

```php
ds('Default screen');
ds('Checkout')->toScreen('checkout');
ds('Checkout')->s('checkout');
```

`toScreen()` takes an optional second argument, `raiseIn`: the delay in seconds before the app comes to the front.

`toScreenWindow()` and its alias `w()` open the screen in a new window.

```php
ds($payment)->toScreenWindow('payments');
ds($payment)->w('payments');
```

## Clear screens

`clear()` removes all previous dumps from all screens.

```php
ds()->clear();
```

To clear one screen, click the `×` on its tab in the app.

## Color tag

Mark a dump with a color. Each color has an alias.

| Method | Alias | Color |
|---|---|---|
| `info()` | `blue()` | Blue |
| `success()` | `green()` | Green |
| `danger()` | `red()` | Red |
| `warning()` | `orange()` | Orange |
| `dark()` | `black()` | Black |

```php
ds('Payment received')->success();
ds('Payment failed')->danger();
```

When `config.color_in_screen` is `true` in `laradumps.yaml`, `info()`, `success()`, `danger()` and `warning()` send the dump to a screen of the same name instead.

## Time

Wrap code in `time()` and `stopTime()`. Use the same reference string in both.

```php
ds()->time('import');

foreach ($rows as $row) {
    // ...
}

ds()->stopTime('import');
```

## Table

`table()` shows data in a table with a search bar. It takes an iterable or object, and an optional name.

```php
$users = [
    ['id' => 1, 'name' => 'David', 'email' => 'david@example.com'],
    ['id' => 2, 'name' => 'Julia', 'email' => 'julia@example.com'],
];

ds()->table($users, 'users');
```

## JSON

`isJson()` validates a string and shows it as formatted JSON. Use it for API and front-end payloads.

```php
ds($response->body())->isJson();  // valid: formatted
ds('{"name: Luan}')->isJson();    // invalid: reported as invalid
```

## Contains

`contains()` checks whether a string appears in the dump. Use it on long strings.

```php
$html = '<select><option>Choice 1</option><option>Choice 3</option></select>';

ds($html)->contains('Choice 3')->label('Should contain');
ds($html)->contains('Choice 29')->label('Should not contain');
```

Both options default to `false`:

```php
$json = '{"name":"Mariana","country":"Brazil"}';

ds($json)->contains('brazil', caseSensitive: true); // no match
ds($json)->contains('Maria', wholeWord: true);      // no match
```

## PHPInfo

`phpinfo()` shows the current PHP settings in a [table](#table).

```php
ds()->phpinfo();
```

## Benchmark

`benchmark()` runs closures and dumps the start time, end time, total time and result of each. The fastest closure is flagged. Pass closures as arguments or as an array.

```php
ds()->benchmark(
    function () {
        sleep(2);
        return 'First';
    },
    function () {
        sleep(1);
        return 'Second';
    }
);
```

Use array keys as labels:

```php
ds()->benchmark([
    'Query' => fn () => User::all(),
    'Cache' => fn () => Cache::get('users'),
]);
```

`benchmark()` returns the instance, so you can chain it with other tools:

```php
ds()->benchmark($first, $second)->table($users, 'users');
```

## Grouped dumps

With `config.grouped_dumps: true` in `laradumps.yaml`, `ds($a, $b)` sends all arguments as one dump instead of one dump per argument.

## Next step

See the [Laravel tools](/debug/laravel), or scan the [reference sheet](/debug/reference-sheet).
