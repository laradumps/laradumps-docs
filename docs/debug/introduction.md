# Introduction

## How to use

To debug with LaraDumps, simply add a `ds()` in your code.

It's quite similar to using the `var_dump()`, `dump()` or `dd()` functions, but with the benefit of seeing your debug dump in a dedicated Desktop Application.

## Try it yourself

In this example, we will add a call to the `ds()` function in the project home-page.

```php{2}
Route::get('/', function () {
    ds('Home page accessed!');
    return view('home');
});
```

When accessing the home-page, your code will be executed normally, and your page will be displayed in the browser as expected.

Meanwhile, in the background, LaraDumps will be sending the debug dump to the Desktop App, as seen here:

![Output](/_media/app_first_example.png)

::: tip
💡 **Trivia**: The "ds()" function is based on the first and last letters of the word **d**ump**s**, and it is conveniently similar to "dd()". This is not a coincidence! Easy to switch!
:::

## Debug Tools

Proceed to discover all available [LaraDumps PHP Tools](/debug/php.html).
