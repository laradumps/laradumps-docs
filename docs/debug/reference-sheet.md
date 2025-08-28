# Reference sheet

On this page you will find the a summary of LaraDumps debug tools.

## PHP

Summary of LaraDumps [PHP Tools](/debug/php.html).

| **Function** | **Description** |
|---|---|
| ds($var); | Dump a string, array or object |
| ds($var1, $var2); | Dump multiples arguments |
| ds($var)->die(); | Dump and die |
| dsd($var); | Alias for dump and die |
| dsq($var); | Perform a dump without invoking (focus) the Desktop App, "Quiet dump" |
| ds($var)->label('My Label'); | Perform a dump with a custom label |
| ds($var)->toScreen('My Screen'); | Adds new screen 'My screen' |
| ds($var)->s('My Screen'); | Alias for new screen |
| ds($var)->info(); | Blue color tag |
| ds($var)->success(); | Green color tag |
| ds($var)->danger(); | Red color tag |
| ds($var)->dark(); | Black color tag |
| ds($var)->warning(); | Orange color tag |
| ds()->time('Reference #1');<br/>... some code ...<br/>ds()->stopTime('Reference #1');  | Start/Stop clocking execution time |
| ds()->table($data, 'my table'); | Dump data in a table format |
| ds($var)->isJson(); | Validates and dumps the JSON data |
| ds($var)->contains('some string', caseSensitive: false, wholeWord: false); | Search if the `content` contains the given string |
| ds()->phpinfo(); | Dump PHP configuration |

## Laravel

Summary of LaraDumps [Laravel Tools](/debug/laravel.html).

| **Function** | **Description** |
|---|---|
| ds()->routes(); | Dump Laravel Routes in a table format |
| str('Hello')<br/>&nbsp;&nbsp;->append('world')<br/>&nbsp;&nbsp;->ds(); | Dump the current string in a Stringable macro |
| collect(['hello', 'world'])->ds(); | Dump the current state of a Collection Macro |
| ds()->queriesOn('My Label');<br/>ds()->queriesOff(); | Start/Stop capturing SQL queries |
| ds()->model(User::query()->first()); | Dump the Model’s Attributes and Relationships. |
| ds()->table(User::all(), 'all users'); | Dump data in a table format |
| ds()->mailable(new \App\Mail\TestMail()); | Dump mail details and the HTML preview for an instance of a `Mailable` class. |
| ds()->httpOn('My Label');<br/>ds()->httpOff(); | Start/Stop capturing HTTP Requests. |
| ds()->commandsOn('My Label');<br/>ds()->commandsOff(); | Start/Stop capturing calls to Artisan. |
| ds()->cacheOn('My Label');<br/>ds()->cacheOff(); | Start/Stop capturing Cache. |
| ds()->withContext(); | Dump the current state of Laravel Context |
| ds()->markdown('# hello world!'); | Dump the markdown rendered as HTML. |

## Livewire/Volt

Summary of LaraDumps [Livewire/Volt Tools](/debug/livewire.html).

| **Function** | **Description** |
|---|---|
| #[Ds]<br/>&nbsp;class MyLivewireComponent extends ... | Listen to a Livewire component. |
| \Livewire\Volt\title('todo');<br/><br/>booted(fn() => ds($this)); | Listen to a Volt component. |

---

## Pest PHP

Summary of LaraDumps [Pest Integration](/debug/pest.html).

| **Function** | **Description** |
|---|---|
| test('example')<br/>&nbsp;&nbsp;->expect(true)<br/>&nbsp;&nbsp;->ds()<br/>&nbsp;&nbsp;->toBeTrue(); | Dump the Pest Expectation API value. |
| test('example')<br/>&nbsp;&nbsp;&nbsp;&nbsp;->livewire(SomeComponent::class) <br/>&nbsp;&nbsp;&nbsp;&nbsp;->call('doSomething', 'some-value') <br/>&nbsp;&nbsp;&nbsp;&nbsp;->ds() <br/>&nbsp;&nbsp;&nbsp;&nbsp;->assertSeeInOrder(...) | Dump the test result. |

---
