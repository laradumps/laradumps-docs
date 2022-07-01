# Commands

### Simple

```php
$var1 = 'Hello World';

ds($var1);
```

---

### Color

```php
ds(['a' => 1, 'b' => 2])->danger()->label('danger');

ds(['a' => 1, 'b' => 2])->info()->label('info');

ds(['a' => 1, 'b' => 2])->success()->label('success');

ds(['a' => 1, 'b' => 2])->dark()->label('dark');

ds(['a' => 1, 'b' => 2])->warning()->label('warning');

ds(['a' => 1, 'b' => 2])->color('violet')->label('violet'); // invalid

ds(['a' => 1, 'b' => 2])->color('bg-violet-500')->label('violet-500');
```

---

### Log Application

By default, all logs will be thrown out.

> You can disable this in config/laradumps.php.

```php
Log::info('Your message', ['0' => 'Your Context']);

Log::error('Your message', ['0' => 'Your Context']);

// Log ...
```

---

### Show queries

if you want to allow capturing of application queries and logs

> To listen and capture Laravel SQL queries and Logs, modify the configuration at config/laradumps.php. Both options are enabled by default.

```php
ds()->queriesOn('label');

$db = Dish::query()->where('id', 20)->get()

ds()->queriesOff();
```

You can also capture the query using the 'ds()' macro method before the call:

> It doesn't need to be enabled in the config/laradumps.php

```php
Dish::query()->where('id', 20)->ds()->get()
```

---

### Clear History

Is your screen full?

```php
ds()->clear();
```

---

### Custom Label

You can add custom label on payload

```php
ds([0 => 'Luan'])->label('array');

ds(collect([0 => 'Luan']))->label('collect');

ds('string')->label('string');

ds($this)->label('label class');
```

---

### JSON Validate

You can check if a json is valid or not

Sometimes you may need to inspect and validate JSON strings coming from APIs or Front-end applications. Using the method isJson() will output if your string is a valid json.

```php
$movies = Http::get('https://api.tvmaze.com/search/people?q=lauren');
        
ds($movies->body())->isJson()
    ->label('Valid JSON');

ds('{"}')->isJson()
    ->label('Invalid JSON');
```

---

### Contains

Inspecting and debugging long strings for specific words can be tiresome and time consuming. Use the method contains() to check if the payload contains a specific string.

```php
$html   = '<select name="select-choice" id="select-choice"><option value="Choice 1">Choice 1</option><option value="Choice 2">Choice 2</option><option value="Choice 3">Choice 3</option></select>';

ds($html)->contains('Choice 3');

$string   = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem?';
$expected = 'muspi';

ds($string)->contains($expected);
```

---

### Table

```php
ds()->table(User::all(['id', 'name']), 'users');
```

---

### Screens

Sometimes you need to send dumps to different screens. When you are working with two projects or using one API then you can call:

```php
ds('screen 1');

ds('{"0":"luan"}')
    ->isJson()
    ->label('format json')
    ->toScreen('api');

ds('screen 2')
    ->s('screen 2');

ds3('screen 3');

ds4('screen 4');

ds5('screen 5');
```

---

### Diff

Sometimes you may want to quickly compare one variable with another, for that use diff()

```php
ds('This is an example text')->diff('This is an example of content');

$array1 = [
    'name'      => 'Luan',
    'last_name' => 'Freitas',
    'is_active' => false,
];

$array2 = [
    'name'      => 'Luan',
    'last_name' => 'Freitas',
    'is_active' => true,
];

ds($array1)->diff($array2, true);
```

---

### Model

This is useful when you only need to check the attributes and relationships of a Model instance.

```php
ds()->model(User::query()->first());
```

---

<hr/>
<footer style="float: right; font-size: larger">
    <span><a style="text-decoration: none;" href="#/reference/index">Reference →</a></span>
</footer>
