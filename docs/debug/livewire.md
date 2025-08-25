# Livewire/Volt Tools

## Introduction

LaraDumps provides a very convenient way to debug [Livewire](https://livewire.laravel.com) Component's `properties`, `events`, `queries` and `validation errors`.

Every time the component is updated, you will be able to see all the information in your LaraDumps Desktop app.

#### Profile

![Output](/_media/livewire/profile.png)

#### Properties

![Output](/_media/livewire/properties.png)

## Livewire Component

To enable LaraDumps to listen to a specific Livewire component, add a `#[Ds]` PHP attribute to the its class as demonstrated in the next example:

```php
use LaraDumps\LaraDumps\Livewire\Attributes\Ds;// [!code ++]

#[Ds]// [!code ++]
class MyLivewireComponent extends \Livewire\Component 
{
    public function mount() 
    {
        // ..
    }
}
```

## Volt function

To enable LaraDumps to listen to a specific Volt component, add a `ds()` function like in the example below.

```php
\Livewire\Volt\title('todo');

booted(fn() => ds($this));  // [!code ++]

state([
    'todo' => ''
]);

// ...
```
