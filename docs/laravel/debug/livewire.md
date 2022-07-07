# Livewire

LaraDumps also dump and show the latest state of [Laravel Livewire](https://laravel-livewire.com) components.

This feature must be enabled and configured in LaraDumps [config file](laravel/get-started/configuration?id=livewire-components). 

You can also disable tracking of specific components in the same config file.

> ❗ **Warning**: You might experience performance issues in your application when tracking Livewire components statement with other debug tools.

Example:

Interacting with the counter component will be tracked by LaraDumps.

```php
class Counter extends Component
{
    public int $count = 0;

    public function increment()
    {
        $this->count++;
        $this->emitTo(Counter2::class, 'count', $this->count);
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
```

Tracking:

![Output](../../_media/livewire.png)
