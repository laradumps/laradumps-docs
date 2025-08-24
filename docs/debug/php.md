# PHP Tools

## Introduction
 
LaraDumps provides you with a set of tools to debug your code and inspect what is happening to your application during the development process.

The LaraDumps core tools are framework agnostic and should be compatible with any PHP project.

In addition to PHP tools, LaraDumps also provides specific tools for debugging [Laravel](/debug/laravel.html) and [Livewire](/debug/livewire.html) projects, and it continues to accompany you while testing your software with [Pest PHP](/debug/pest.html).

## Dump

To send a dump to the application, just pass one or more values to the `ds()` function.

```php{8,11}
$myString = 'Hello World!';

$myArray = ['name' => 'Luan', 'country' => 'BR'];

$myBoolean = false;

//Single value
ds($myString);

//Multiple values
ds($myString, $myArray, $myBoolean);
```

This function is similar to PHP `var_dump()` or Laravel's `dump()` and it will not stop the code execution.

![Output](/_media/app_second_example.png)

## Dump and die

Use the function `ds()->die()` or its shortcut `dsd()` to dump and immediately stop the code execution.

```php{3}
$myString = 'Hello World!';

ds($myString)->die(); // or dsd($myString);

ds('This code will never be executed!');
```

This function is similar to PHP `var_dump(); die;`or Laravel's `dd()`.

## Quiet dump

By default, LaraDumps Desktop App will be invoked and gain focus whenever a new dump is received.

If this is not what you want, simply disable the [Auto-Invoke](/get-started/configuration?id=auto-invoke) feature.

Alternatively, just use the `dsq()` method and send a quiet dump. This will not invoke the App.

```php{6,9}
// Requires Auto-Invoke to be enabled

$products = [['id' => 1, 'price' => 10], ['id' => 2, 'price' => 50], ['id' => 3, 'price' => -5]];

foreach ($products as $product) {
    dsq('Checking product #' . $product['id']); //Send a dump without invoking the app

    if ($product['price'] < 0) {
        ds('Price error in product #' . $product['id']); //App will be invoked
    }
}
```

The previous example will quietly dump each product prices and only invoke in case the price is invalid.

## Label

You can use the `label()` method to set a label to your debug dump.

Assigning a label makes it easier to locate the debug dump among other similar results.

```php{4,6}
$person  = ['name' => 'Luan', 'country' => 'BR'];
$person2 = ['name' => 'Taylor', 'country' => 'US'];

ds($person)->label('Creator of LaraDumps');

ds($person2)->label('Creator of Laravel');
```

## Screens

You can use the `toScreen()` or `s()` methods to send your debug dump to a specific Screen.

By opening different screens, you can better organize your dumps into groups of similar issues.

```php
ds('this is screen 1'); //default screen

ds('this is screen 2')->toScreen('screen 2');

ds('custom value')->s('Custom screen');

```

## Clear Screens

You can use the `clear()` method to delete all previous dumps from all screens.

This will reset your application to the start point.

```php
ds()->clear();
```

::: tip
📝 **Note**: To clear only the current screen, click on the `×` at the right end of the screen list.
:::

## Color Tag

You can use the `color()` method to mark a dump with a predefined color.

```php
ds('Info: Just FYI')->info(); // or ->blue()

ds('Success: IT WORKS!')->success(); // or ->green()

ds('Danger: ERROR!!!')->danger(); // or ->red()

ds('Warning: Something is not right!')->warning(); // or ->orange()

ds('Dark: The Dark Side of the Moon')->dark(); // or ->black()

```

## Time

To simply measure the execution time of a block of code, place it within the `time($reference)` and `stopTime($reference)` methods.

You must pass the **same unique** `$reference` title to both methods. The reference can be any combination of words.

```php{1,7}
ds()->time('my count');

    for($i=0; $i<100000; $i++){
        //some code
    }

ds()->stopTime('my count');
```

## Table

You can use the `table()` method to display dumps in a table with a built-in search bar.

To build a table, you must pass an `iterable $data` as the first argument, followed by an optional `string $name` for the table name.

```php{7}
$allUsers = [
        ['id' => 1, 'name' => 'David', 'email' => 'david@example.com'],
        ['id' => 2, 'name' => 'Julia', 'email' => 'julia@example.com'],
        //...
];

ds()->table($allUsers, 'my users table');
```

## JSON

Use the `isJson()` method to validate and display JSON strings in human-readable format.

This is very helpful for checking JSON content sent from an API or front-end app.

```php{7,10}
use Illuminate\Support\Facades\Http;

//Fetch Json data from the API
$moviesJson = Http::get('https://api.tvmaze.com/search/people?q=lauren')->body();

//✅ Valid JSON string
ds($moviesJson)->isJson();

//❌ Invalid JSON string
ds('{"name: Luan}')->isJson();
```

## Contains

You can use the `contains()` method to verify if a given string appears in the dump.

This is particularly useful when working with longer strings that require a lot of time to inspect and debug.

```php{3,5}
$html   = '<select name="select-choice" id="select-choice"><option value="Choice 1">Choice 1</option><option value="Choice 2">Choice 2</option><option value="Choice 3">Choice 3</option></select>';

ds($html)->contains('Choice 3')->label('It should contain');

ds($html)->contains('Choice 29')->label('Should not contain');
```

For a stricter search, you can activate `Case Sensitive` or `Whole word` parameters:

```php{4,7}
$json = '{"name":"Mariana", "country":"Brazil"}';

//Will not match "Brazil"
ds($json)->contains('brazil', caseSensitive: true);

//No match for "Maria" in "Mariana"
ds($json)->contains('Maria', wholeWord: true);
```

## PHPInfo

Displays the current PHP settings in [table](/debug/php.html?id=table#table) format.

```php
ds()->phpinfo();
```

## Benchmark

Benchmark closures (`array` of closures or a variable number of closures as `arguments`) and dump detailed results including `start time, end time, total execution time, and result` for each closure and also includes a `fastest` flag to indicate the fastest closure in the results.

```php
ds()->benchmark(
    function() {
        sleep(2);
        return 'First';
    },
    function(){
        sleep(1);
        return 'Second';
    }
);
```

You can also add custom labels for each closures:

```php
ds()->benchmark([
    'Label 1' => function() {
        sleep(1);
        return 'Result 1';
    },
    'Label 2' => function() {
        sleep(2);
        return 'Result 2';
    },
]);
```

You can also chain multiple benchmarks or other tools:

```php
ds()->benchmark(
    ...
)->benchmark(
    ...
)->table(..., ...);
```
