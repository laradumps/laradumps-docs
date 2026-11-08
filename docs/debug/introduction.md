# Introduction

Add `ds()` to your code. It works like `var_dump()` or `dump()`, but the output appears in the desktop app.

```php{2}
Route::get('/', function () {
    ds('Home page accessed!');
    return view('home');
});
```

The page renders as usual. The app receives the dump.

<DumpPreview code="ds('Home page accessed!');" file="routes/web.php:2" type="dump" output="(string) Home page accessed!" />

::: tip
`ds` comes from **d**ump**s**. It is one letter away from `dd()`, so switching is easy.
:::

## Next step

Learn the [PHP tools](/debug/php), or see every helper in the [reference sheet](/debug/reference-sheet).
