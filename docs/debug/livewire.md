# Livewire

LaraDumps can also dump and show the latest state of [Laravel Livewire](https://laravel-livewire.com) components.

This feature must be enabled and configured in LaraDumps [config file](/get-started/configuration?id=livewire-components).

You can also disable tracking of specific components in the same config file.

---

## Livewire Events

LaraDumps can also listen to the Livewire Events and Browser Events (dispatch).

LaraDumps will also display a warning if the Event was not received by any other component.

Both features must be enabled. Read more about [Livewire Events](/get-started/configuration?id=livewire-events) and [Livewire Browser Events](/get-started/configuration?id=livewire-browser-events) configuration.

![Output](/_media/lvw_events.png)

---

## Livewire Validation

LaraDumps can also listen to the Livewire Validation and dump its fails for you.

This can be useful during development or if you have not included a `@error('field')` directive in your Blade file.

This feature must be enabled. Read more about [Livewire Validation](/get-started/configuration?id=livewire-validation) configuration.

---

## Livewire Component Highlight

Pages with multiple components can be overwhelming.

To help you identify each component, LaraDumps can highlight the component in your browser whenever you select it in the Desktop App.

![Output](/_media/lvw_highlight.png)

In order to make this feature to work, you must:

1․ Enable this feature. Read more about [Livewire Component Highlight](/get-started/configuration?id=livewire-component-highlight) configuration.

2․ Add your `Pusher` credentials in your `.env` file

3․ Import the highlight in code in your project's `app.js`. See below:

```javascript
if (process.env.NODE_ENV === 'development') {
    require('./../../vendor/laradumps/laradumps/resources/js/index')
}
```

---

## Page reload

In order to keep track of your page components, you will need to clear your LaraDumps App history every time your page is reloaded. LaraDumps can do it automatically for you. Read more about [Livewire Auto-Clear](/get-started/configuration?id=livewire-auto-clear) functionality.

::: warning
❗ You might experience performance issues in your application when tracking Livewire components statement with other debug tools.
:::

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

![Output](/_media/livewire.png)
