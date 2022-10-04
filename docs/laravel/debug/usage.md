# Usage

## Introduction

To debug with LaraDumps, simply add a `ds()` in your code.

It's quite similar to using the `dump()` or `dd()` functions, but with the benefit of seeing your debug dump in a dedicated Desktop Application.

### Try it yourself

Add the `ds()` function to your `routes/web.php` main route, just like in the code below:

```php
// File: routes/web.php

Route::get('/', function () {
    ds('Home page accessed!'); //<==========
    return view('home');
});
```

Now, access your home-page, and you will see the debug dump in the Desktop App:

<img src="(../../_media/basicExample.png" alt="app" width="500">

> 💡 **Trivia**: The "ds()" function is based on the first and last letters of the word **d**ump**s**, and it is conveniently similar to "dd()". This is not a coincidence! Easy to switch!

## Debug Tools

LaraDumps provides you with a set of tools to debug your code and inspect what is happening to your application during the development process.

### Dump

To send a dump to the application, just pass one or more values to the `ds()` function.

```php
$myString = 'Hello World!';

$myArray = ['name' => 'Luan', 'country' => 'BR'];

$myBoolean = false;

//Single value
ds($myString);

//Multiple values
ds($myString, $myArray, $myBoolean);
```

This function is similar to Laravel's `dump()` and it will not stop the code execution.

---

### Dump and die

Use the function `ds()->die()` or its shortcut `dsd()` to dump and immediately stop the code execution.

```php
$myString = 'Hello World!';

ds($myString)->die(); 
//dsd($myString);

ds('This will never happen');
```

This function is similar to Laravel's `dd()`.

---

### Quiet dump

By default, LaraDumps Desktop App will be invoked and gain focus whenever a new dump is received.

If this is not what you want, simply disable the [Auto-Invoke](laravel/get-started/configuration?id=auto-invoke) feature.

Alternatively, just use the `dsq()` method and send a quiet dump. This will not invoke the App.

```php
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

---

### Label

You can use the `label()` method to set a label to your debug dump.

Assigning a label makes it easier to locate the debug dump among other similar results.

```php
$person  = ['name' => 'Luan', 'country' => 'BR'];
$person2 = ['name' => 'Taylor', 'country' => 'US'];

ds($person)->label('Creator of Laradumps');

ds($person2)->label('Creator of Laravel');
```

---

### Screens

You can use the `toScreen()` or `s()` methods to send your debug dump to a specific Screen.

By opening different screens, you can better organize your dumps into groups of similar issues.

```php
ds('this is screen 1'); //default screen

ds('this is screen 2')->toScreen('screen 2');

ds('custom value')->s('Custom screen');

```

To save time, numbered screens can be targeted using aliases:

```php
ds('this is screen 1');

ds2('this is screen 2');

ds3('this is screen 3');

ds4('this is screen 4');

ds5('this is screen 5');
```

> 📌 Click on the [pin](laravel/get-started/desktop-app) icon to permanently focus a screen and keep its dumps when [clearing all screens](laravel/debug/usage?id=clear-screens).

In the Desktop App:

<img src="(../../_media/screens.png" alt="app" width="500">

---

### Clear Screens

You can use the `clear()` method to delete all previous dumps from all screens.

This will reset your application to the start point.

```php
ds()->clear();
```

> 📝 **Note**: To clear only the current screen, click on the `×` at the right end of the screen list.

---

### Color Tag

You can use the `color()` method to mark a dump with a predefined color or provide a provided Tailwind color.

Read more about Tailwind color palette [here](https://tailwindcss.com/docs/customizing-colors#default-color-palette).

```php
ds('Info: Just FYI')->info();

ds('Success: IT WORKS!')->success();

ds('Danger: ERROR!!!')->danger();

ds('Warning: Something is not right!')->warning();

ds('Dark: The Dark Side of the Moon')->dark();

//A custom color
ds('Tailwind Custom Color!')->color('border-violet-500');
```


In the Desktop App:

<img src="(../../_media/colors.png" alt="app" width="500">

---

### Laravel Logs

The Desktop App will receive and dump [Laravel Logs](https://laravel.com/docs/9.x/logging) entries whenever you enable the [Log](laravel/get-started/configuration?id=laravel-logs) feature.

LaraDumps also provides a one-click internet search on Error Log messages. This is very convenient for exceptions and general error messages.

```php
Log::info('Your message', ['0' => 'Your Context']);

Log::error('Your message', ['0' => 'Your Context']);
```

In the Desktop App:

<img src="(../../_media/log.png" alt="app" width="500">

---

### Time

To simply measure the execution time of a block of code, place it within the `time($reference)` and `stopTime($reference)` methods.

You must pass the **same unique** `$reference` title to both methods. The reference can be any combination of words.

```php
ds()->time('my count');

    for($i=0; $i<100000; $i++){
        //some code
    }

ds()->stopTime('my count');
```

In the Desktop App:

<img src="(../../_media/time.png" alt="app" width="500">

---

### SQL Queries

To debug SQL queries, you must place the database call within the `queriesOn()` and `queriesOff()` methods.

You are required to enable [SQL Query Listening](laravel/get-started/configuration?id=sql-queries) for this feature to work properly.

For example:

```php
use App\Models\User;

ds()->queriesOn('checking a user query');

    User::query()->where('id', 20)->get();

ds()->queriesOff();
```

#### Query inspection Macro

You can also chain a `ds()` method before the query execution and, it will be dumped in the Desktop App:

```php
use App\Models\User;

User::query()->where('id', 20)
    ->ds()
    ->get();
```

> 📝 **Note**: The macro feature doesn't require SQL Queries to be enabled in the configuration file.

In the Desktop App:

<img src="(../../_media/sqlDump.png" alt="app" width="500">

---

### Model Inspection

You can use the `model()` method to view [Eloquent Model's](https://laravel.com/docs/9.x/eloquent#introduction) Attributes and Relationships.

```php
use App\Models\User;

$firstUser = User::first();

ds()->model($firstUser);
```

In the Desktop App:

<img src="(../../_media/userModel.png" alt="app" width="500">

---

### Routes

You can use the `routes()` method to list all Routes in a [table](laravel/debug/usage?id=table) format.

You may configure LaraDumps to [exclude](laravel/get-started/configuration?id=routes) specific routes from the dump output.

```php
ds()->routes();
```

---

### Table

You can use the `table()` method to display dumps in a table with a built-in search bar.

To build a table, you must pass an `iterable $data` as the first argument, followed by an optional `string $name` for the table name.

```php
use App\Models\User;

// Using an iterable
$allUsers = [
        ['id' => 1, 'name' => 'David', 'email' => 'david@example.com'],
        ['id' => 2, 'name' => 'Julia', 'email' => 'julia@example.com'],
        //...
];

// Using Elloquent
$allUsers = User::all(['id', 'name', 'email']);

ds()->table($allUsers, 'my users table');
```

In the Desktop App:

<img src="(../../_media/table.png" alt="app" width="500">

---

### Diff

You can use `diff()` to see how two values compare to each other.

```php
$userBefore = ['name' => 'Luan', 'last_name' => 'Freitas', 'is_active' => false];

// The values are altered by some code...

$userAfter = ['name' => 'Luan', 'last_name' => 'Freitas', 'is_active' => true];

ds($userBefore)->diff($userAfter, true);

```

In the Desktop App:

<img src="(../../_media/diff.png" alt="app" width="500">

---

### JSON

Use the `isJson()` method to validate and display JSON strings in human-readable format.

This is very helpful for checking JSON content sent from an API or front-end app.

```php
use Illuminate\Support\Facades\Http;

// Json from API
$moviesJson = Http::get('https://api.tvmaze.com/search/people?q=lauren')->body();
        
ds($moviesJson)->isJson();

//Invalid JSON
ds('{"name: Luan}')->isJson();
```

In the Desktop App:

<img src="(../../_media/json.png" alt="app" width="500">

---

### Contains

You can use the `contains()` method to verify if a given string appears in the dump.

This is particularly useful when working with longer strings that require a lot of time to inspect and debug.

```php
$html   = '<select name="select-choice" id="select-choice"><option value="Choice 1">Choice 1</option><option value="Choice 2">Choice 2</option><option value="Choice 3">Choice 3</option></select>';

ds($html)->contains('Choice 3')->label('Must be there');

ds($html)->contains('Choice 29')->label('Should not contain');
```

For a stricter search, you can activate `Case Sensitive` or `Whole word` parameters:

```php
$json = '{"name":"Mariana", "country":"Brazil"}';

//Will not match "Brazil"
ds($json)->contains('brazil', caseSensitive: true);

//No match for "Maria" in "Mariana" 
ds($json)->contains('Maria', wholeWord: true);
```

In the Desktop App:

<img src="(../../_media/contains.png" alt="app" width="500">

---

### PHPInfo

Displays the current PHP settings in [table](laravel/debug/usage?id=table) format.

```php
ds()->phpinfo();
```

---

Next: [Livewire](laravel/debug/livewire.md "Livewire")
