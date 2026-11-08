# Pest

LaraDumps adds `ds()` to Pest expectations and test responses.

## Enable in tests

Dumps are off while tests run. Turn on **Enabled in testing** in the app's project settings, or set it in `laradumps.yaml`:

```yaml
observers:
  enabled_in_testing: true
```

## Expectations

Chain `ds()` in an expectation to dump its value. The dump is labeled `Pest Expectation`.

```php{3}
test('calculates the total', function () {
    expect(Order::total($items))
        ->ds()
        ->toBe(150);
});
```

## Test responses

Chain `ds()` on a test response to dump its status, headers, data and exceptions. The dump is labeled `Test Response`.

```php{4}
test('shows the order', function () {
    livewire(ShowOrder::class)
        ->call('refresh')
        ->ds()
        ->assertSeeInOrder(['Order #1', 'Paid']);
});
```

## Architecture test

Production code should not contain debug calls. Use Pest [architecture testing](https://pestphp.com/docs/arch-testing) to fail when they appear.

```php
arch('does not use debug functions')
    ->expect(['ds', 'dsd', 'dsq', 'dd', 'ddd', 'dump', 'ray', 'die', 'var_dump', 'sleep', 'exit'])
    ->not->toBeUsed();
```
