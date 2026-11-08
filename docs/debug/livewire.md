# Livewire and Volt

LaraDumps shows each [Livewire](https://livewire.laravel.com) component with its properties, queries and timings. It sends one payload per HTTP request.

Pick the components you want to watch in the page picker, or pin them from code.

## Enable the observer

Turn on the Livewire observer in `laradumps.yaml`. The page picker only appears when `APP_DEBUG=true`.

```yaml
observers:
  livewire: true
```

::: tip
The page picker needs `laradumps/laradumps` 5.5 or later.
:::

## Pin a component

Add the `#[Ds]` attribute to the component class. LaraDumps sends that component on every request it takes part in, even if you did not pick it.

```php
use LaraDumps\LaraDumps\Livewire\Attributes\Ds; // [!code ++]

#[Ds] // [!code ++]
class OrderList extends \Livewire\Component
{
    // ...
}
```

## Pin a Volt component

Call `ds($this)` in `booted()`.

```php
use function Livewire\Volt\{booted, state};

booted(fn () => ds($this)); // [!code ++]

state(['todo' => '']);
```
