# Usage

## Introduction

To debug with LaraDumps, simply add a `ds()` in your code in the same way as you would use `dump()` or `dd()`.

The debug information will be sent to the Desktop App.

Here is an example:

```php
//File: routes/web.php

Route::get('/', function () {
    ds('Home page accessed!'); //add this code here!
    return view('home');
});
```

Add the `ds()` function to your `routes/web.php` main route, just like in this code above.

Now, access your home-page, and then you will see your debug dump in the Desktop App:

<img src="(../../_media/basicExample.png" alt="app" width="500">

> 💡 **Trivia**: The "ds()" function is based on the first and last letters of the word **d**ump**s**, and it is conveniently similar to "dd()". This is not a coincidence! Easy to switch!

## Debug Functions

LaraDumps provides you a set of  tools to debug your code and inspect what is happening to your application during development.

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

This function behaves similarly to Laravel's `dump()` and it will not stop the code execution.

---

### Dump and die

Use the function `ds()->die()` or its shortcut `dsd()` to dump and immediately stop the code execution.

```php
$myString = 'Hello World!';

//Dump and die
ds($myString)->die(); // or dsd($myString);

ds('This will never happen');
```

This function is similar to Laravel's `dd()`.

---

### Quiet dump

By default, LaraDumps Desktop App will be invoked and gain focus whenever a new dump is received.

You can use`dsq()` to send a quiet dump, without invoking the app.

Alternatively, you can permanently disable the [Auto-Invoke](laravel/get-started/configuration?id=auto-invoke) feature.

```php
$products = [['id' => 1, 'price' => 10], ['id' => 2, 'price' => 50], ['id' => 3, 'price' => -5]];

foreach ($products as $product) {
    dsq('Checking product #' . $product['id']); //Send a dump without invoking the app

    if ($product['price'] < 0) {
        ds('Price error in product #' . $product['id']); //App will be invoked
    }
}
```

---

### Label

Labels are very useful to identify a specific dump among many other similar outputs.

Use them to better organize your debugging process.

```php
$person  = ['name' => 'Luan', 'country' => 'BR'];
$person2 = ['name' => 'Taylor', 'country' => 'US'];

ds($person)->label('Creator of Laradumps');

ds($person2)->label('Creator of Laravel');
```

---

### Screens

Using multiple debug screens allows you to group based on what they have in common,  improving your debugging process.

This is useful when you work in different projects or want to separate dumps from API and APP.

```php
ds('this is screen 1'); //default screen

ds('this is screen 2')->toScreen('screen 2');
```

You can use pre-defined screens and short methods (aliases) to save time typing:

```php
//Pre-configured screens

ds('this is screen 1');

ds2('this is screen 2');

ds3('this is screen 3');

ds4('this is screen 4');

ds5('this is screen 5');

//Custom screen name
ds('custom value')->s('Custom screen');
```

In the Desktop App:

<img src="(../../_media/screens.png" alt="app" width="500">

---

### Color Tag

You can also modify the default color indicator for each dump.

```php
$myVar = 'LaraDumps colors';

ds($myVar)->info()->label('Just FYI');

ds($myVar)->success()->label('IT WORKS!');

ds($myVar)->danger()->label('ERROR!!!');

ds($myVar)->warning()->label('Something is not right!');

ds($myVar)->dark()->label('The Dark Side of the Moon');

//A custom color
ds($myVar)->color('bg-violet-500')->label('Tailwind color');
```

Read more about Tailwind color palette [here](https://tailwindcss.com/docs/customizing-colors#default-color-palette).

---

### Clear Screens

Use this method to clear all previous dumps in all screens. 

This will reset your application to the start point.

```php
ds()->clear();
```

---

### Laravel Logs

Laravel logs will be sent to the Desktop Application.

LaraDumps provides a one-click internet search for Google, Stack Overflow and Laracasts. This is very convenient for exceptions and general error messages.

The Log feature must be enabled in LaraDumps [config file](laravel/get-started/configuration?id=laravel-logs).

```php
Log::info('Your message', ['0' => 'Your Context']);

Log::error('Your message', ['0' => 'Your Context']);
```

In the Desktop App:

<img src="(../../_media/log.png" alt="app" width="500">

---

### Time

To simply measure the execution time of a block of code, place it inside the methods `time($reference)` and `stopTime($reference)`.

You must pass the **same unique** `$reference` title to both methods, and it can be any combination of words.

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

This feature must be enabled in LaraDumps [config file](laravel/get-started/configuration?id=sql-queries).

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

Dumps the Model's Attributes and Relationships.

```php
use App\Models\User;

$firstUser = User::first();

ds()->model($firstUser);
```

In the Desktop App:

<img src="(../../_media/userModel.png" alt="app" width="500">

---

### Routes

Dumps Laravel Routes in a [table](laravel/debug/usage?id=table) format.

You might want to hide some routes from the dump output. This can be accomplished in the [config file](laravel/get-started/configuration?id=routes).

```php
ds()->routes();
```

---

### Table

The method `table()` will dump data in a table format with a built-in search functionality.

This method requires a `collection` or `array` as the first argument, followed by an optional `string` name to identify your table.

```php
use App\Models\User;

$allUsers = User::all(['id', 'name', 'email']);

ds()->table($allUsers, 'my users table');
```

In the Desktop App:

<img src="(../../_media/table.png" alt="app" width="500">

---

### Diff

Sometimes you may want to quickly compare one variable with another, for that use diff()

```php
$userBefore = ['name' => 'Luan', 'last_name' => 'Freitas', 'is_active' => false];

// Some code happens...

$userAfter = ['name' => 'Luan', 'last_name' => 'Freitas', 'is_active' => true];

ds($userBefore)->diff($userAfter, true);

//Comparing text
ds('This is an EXAMPLE text')->diff('This is an example text');
```

In the Desktop App:

<img src="(../../_media/diff.png" alt="app" width="500">

---

### JSON

Sometimes you may need to inspect and validate JSON strings coming from different sources, such as an API or Front-end application.

Use the `isJson()` method to validate and display a JSON in human-readable format.

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

Inspecting and debugging long strings can be tiresome and time-consuming.

Use the method `contains()` to check if the dump contains a specific string.

```php
$html   = '<select name="select-choice" id="select-choice"><option value="Choice 1">Choice 1</option><option value="Choice 2">Choice 2</option><option value="Choice 3">Choice 3</option></select>';

ds($html)->contains('Choice 3')->label('Must be there');

ds($html)->contains('Choice 29')->label('Should not contain');
```

You can also perform a more strict search using the `Case Sensitive` or `Whole word` parameters.

By default, both parameters are false. See the example below:

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

Dumps PHP configuration. Similar to `phpinfo()`.

```php
ds()->phpinfo();
```

---
