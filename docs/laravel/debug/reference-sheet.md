# Reference sheet

LaraDumps usage reference sheet:

<style>
    td::before { display: none }
  <!-- @see https://github.com/docsifyjs/docsify/issues/794 -->
</style>

| **Function**                                                        | **Description**                                                                                                     |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| ds($var);                                                           | Display a string, array or object                                                                                   |
| ds($var1, $var2);                                                   | Display multiples arguments                                                                                         |
| ds($var)->die();                                                    | Dump and die                                                                                                        |
| dsd($var);                                                          | Alias for dump and die                                                                                              |
| dsq($var);                                                          | Send a dump without invoking (focus) the Desktop App, "Quiet dump"                                                  |
| ds($var)->label('My Label');                                        | Send dump with a custom label                                                                                       |
| ds($var)->toScreen('My Screen');                                    | Adds new screen 'My screen'                                                                                         |
| ds($var)->s('My Screen');                                           | Alias for new screen                                                                                                |
| ds2($var); ... ds5($var);                                           | Send dump to pre-defined screens ('screen 2' to 'screen 5');                                                        |
| ds($var)->info();                                                   | Blue color tag                                                                                                      |
| ds($var)->success();                                                | Green color tag                                                                                                     |
| ds($var)->danger();                                                 | Red color tag                                                                                                       |
| ds($var)->dark();                                                   | Black color tag                                                                                                     |
| ds($var)->warning();                                                | Orange color tag                                                                                                    |
| ds($var)->color('bg-slate-500');                                    | Color tag using the [Tailwind color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette) |
| ds()->time('Reference #1');                                         | Start clocking execution time                                                                                       |
| ds()->stopTime('Reference #1');                                     | Stop clocking execution time                                                                                        |
| ds()->queriesOn('My Label');                                        | Start capturing SQL queries                                                                                         |
| ds()->queriesOff();                                                 | Stop capturing SQL queries                                                                                          |
| ds()->model(User::query()->first());                                | Dumps the Model’s Attributes and Relationships.                                                                     |
| ds()->mailable(new \App\Mail\TestMail());                           | Displays mail details and the HTML preview for an instance of a `Mailable` class.                                       |
| ds()->httpClientOn('My Label');                                     | Start capturing HTTP Requests.                                                                                      |
| ds()->httpClientOff();                                              | Stop capturing HTTP Requests.                                                                                       |
| ds()->showJobs('My Label');                                         | Start capturing Jobs.                                                                                               |
| ds()->stopShowingJobs();                                            | Stop capturing Jobs.                                                                                                |
| ds()->showCache('My Label);                                         | Start capturing Cache.                                                                                              |
| ds()->stopShowingCache();                                           | Stop capturing Cache.                                                                                               |
| ds()->routes();                                                     | Dumps Laravel Routes in a table format                                                                              |
| ds()->table(Collection $data, $name);                               | Dumps data in a table format                                                                                        |
| ds($var1)->diff($var2);                                             | Checks the difference between two variables                                                                         |
| ds($var)->isJson();                                                 | Validates and display JSON data                                                                                     |
| ds($var)->contains('Text', caseSensitive: false, wholeWord: false); | Search if the `content` contains the given string                                                                   |
| Str::of('hello world')->upper()->ds();                              | Displays the current string in a Stringable macro                                                                   |
| collect(['hello', 'world'])->ds();                                  | Displays the current state of a Collection Macro                                                                    |
| ds()->markdown('# Hi, Anand Pilania!');                             | Displays the markdown rendered as HTML.                                                                             |
| ds()->phpinfo();                                                    | Dumps PHP configuration                                                                                             |
| ds()->coffee();                                                     | ☕ Grab a coffee!                                                                                                      |
| php artisan ds:init                                                 | LaraDumps configuration wizard                                                                                      |
| php artisan ds:check                                                | Scan files for ds(); declarations. Useful before sending app to production                                          |


---

Next: [Usage](laravel/debug/usage.md "Usage")
