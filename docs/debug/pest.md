# Pest PHP Integration

## Introduction

LaraDumps provides a [Pest](https://www.pestphp.com) Helper to integrate its debugging tool into your testing experience.

## Pest PHP Expectation

To inspect the value of Pest Expectation, just chain a `ds()` method inside the expectation.

```php{3}
test('some test', function() {
    expect(Something::execute())
        ->ds() //dumps the expectation value
        ->toBe('some result');
});
```

## Test Response

LaraDumps also allows you to inspect the test response by chaining `ds()` method in a Livewire test.

```php{4}
test('some test', function() {
    livewire(SomeComponent::class)
        ->call('doSomething', 'some-value')
        ->ds()
        ->assertSeeInOrder([
            'result 1',
            'result 2',
            'result 3',
        ]);
});
```

## Architecture Test

Production code should not contain any debug functions.

This example uses Pest's [Architecture testing](https://pestphp.com/docs/arch-testing) to check your code for the usage of any of this debug functions.

```php
arch('does not use debug functions')
    ->expect(['ds', 'ds1' 'ds2', 'ds3', 'ds4', 'ds5', 'dsd', 'dsq', 'dd', 'ddd', 'dump', 'ray', 'die', 'var_dump', 'sleep', 'exit'])
    ->not->toBeUsed();
```
