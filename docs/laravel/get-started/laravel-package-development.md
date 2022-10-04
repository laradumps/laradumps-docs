# Laravel Package Development

You can also use LaraDumps during the process of creating a Laravel package.

Follow the steps listed here to install LaraDumps with [Testbench](https://github.com/orchestral/testbench).

## Install

1․ Install Testbench according to the [official documentation](https://packages.tools/testbench/getting-started/introduction.html#installation).

2․ Proceed to install LaraDumps via composer, run:

```shell
composer require --dev laradumps/laradumps
```

3․ Create a file `testbench.yaml` in your package root directory and add the content below to it:

```yaml
providers:
  - LaraDumps\LaraDumps\LaraDumpsServiceProvider
```

4․ Finally, [configure](laravel/get-started/configuration.md) LaraDumps using [CLI Commander](https://packages.tools/testbench/commander.html), run:

```shell
./vendor/bin/testbench ds:init
```

LaraDumps should be ready to use!

---

## Writing Tests

Here are the steps you need to do to use LaraDumps in your Test Case:

1․ Open your Test Case file, for example `tests/TestCase.php`.

2․ Make sure the Test Case class extends `TestCase` class from `Orchestra\Testbench\TestCase`.

3․ Include `LaraDumpsServiceProvider` in `getPackageProviders()` method.

This is how your Test Case may look like:

```php
// File: tests/TestCase.php
<?php

namespace Tests;

use MyPackage\MyPackage\MyPackageServiceProvider;
use LaraDumps\LaraDumps\LaraDumpsServiceProvider;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

class TestCase extends OrchestraTestCase //<=== Extends Orchestra\Testbench\TestCase
{
    //...

    public function getPackageProviders($app)
    {
        return [
            MyPackageServiceProvider::class, //<=== Your package Service Provider
            LaraDumpsServiceProvider::class, //<=== Include LaraDumps ServiceProvider
        ];
    }
}
```

Here is an example of a test written with [Pest](https://pestphp.com/):

```php
// File: tests/MyTest.php
<?php

uses(Tests\TestCase::class);

test('example test', function () {
    ds('this works!');
    
    $this->assertTrue(true);
});
```

---

Next: [Desktop App](laravel/get-started/desktop-app.md "Desktop App")
