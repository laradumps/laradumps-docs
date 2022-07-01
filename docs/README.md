# What is LaraDumps?

LaraDumps is an app designed to boost your Laravel PHP coding and debugging experience. Dumps was inspired by [Spatie Ray](https://github.com/spatie/ray), check it out!.

* This project is free and open source, supports only applications built with Laravel Framework.

## Tech Stack

* Electron

## Renderer

* VanillaJS
* AlpineJs
* TailwindCSS

--- 

# Here's an example:

```php
ds('Hello world');

ds(['a' => 1, 'b' => 2])->danger();

ds('multiple', 'arguments', $foo, $bar);

ds()->queriesOn('label');

User::firstWhere('email', 'you@email.com');

ds()->queriesOff();

ds()->die(); 
```

And also with the blade directive:

```blade
<div>
    @foreach($array as $key => $value)
        @ds($key, $value);
    @endforeach
</div>
```

<hr/>
<footer style="float: right; font-size: larger">
    <span><a style="text-decoration: none;" href="#/get-started/index">Get Started →</a></span>
</footer>


