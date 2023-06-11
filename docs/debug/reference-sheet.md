# Reference sheet

LaraDumps usage reference sheet:

| **Function**                                                        | **Description**                                                                   | ** Package **   |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------|
| ds($var);                                                           | Display a string, array or object                                                 | Any             |
| ds($var1, $var2);                                                   | Display multiples arguments                                                       | Any             |
| ds($var)->die();                                                    | Dump and die                                                                      | Any             |
| dsd($var);                                                          | Alias for dump and die                                                            | Any             |
| dsq($var);                                                          | Send a dump without invoking (focus) the Desktop App, "Quiet dump"                | Any             |
| ds($var)->label('My Label');                                        | Send dump with a custom label                                                     | Any             |
| ds($var)->toScreen('My Screen');                                    | Adds new screen 'My screen'                                                       | Any             |
| ds($var)->s('My Screen');                                           | Alias for new screen                                                              | Any             |
| ds2($var); ... ds5($var);                                           | Send dump to pre-defined screens ('screen 2' to 'screen 5');                      | Any             |
| ds($var)->info();                                                   | Blue color tag                                                                    | Any             |
| ds($var)->success();                                                | Green color tag                                                                   | Any             |
| ds($var)->danger();                                                 | Red color tag                                                                     | Any             |
| ds($var)->dark();                                                   | Black color tag                                                                   | Any             |
| ds($var)->warning();                                                | Orange color tag                                                                  | Any             |
| ds()->time('Reference #1');                                         | Start clocking execution time                                                     | Any             |
| ds()->stopTime('Reference #1');                                     | Stop clocking execution time                                                      | Any             |
| ds()->queriesOn('My Label');                                        | Start capturing SQL queries                                                       | Laravel Package |
| ds()->queriesOff();                                                 | Stop capturing SQL queries                                                        | Laravel Package |
| ds()->model(User::query()->first());                                | Dumps the Model’s Attributes and Relationships.                                   | Laravel Package |
| ds()->mailable(new \App\Mail\TestMail());                           | Displays mail details and the HTML preview for an instance of a `Mailable` class. | Laravel Package |
| ds()->httpOn('My Label');                                           | Start capturing HTTP Requests.                                                    | Laravel Package |
| ds()->httpOff();                                                    | Stop capturing HTTP Requests.                                                     | Laravel Package |
| ds()->jobsOn('My Label');                                           | Start capturing Jobs.                                                             | Laravel Package |
| ds()->jobsOff();                                                    | Stop capturing Jobs.                                                              | Laravel Package |
| ds()->commandsOn('My Label');                                       | Start capturing calls to Artisan.                                                 | Laravel Package |
| ds()->commandsOff();                                                | Stop capturing calls to Artisan.                                                  | Laravel Package |
| ds()->cacheOn('My Label');                                          | Start capturing Cache.                                                            | Laravel Package |
| ds()->cacheOff();                                                   | Stop capturing Cache.                                                             | Laravel Package |
| ds()->routes();                                                     | Dumps Laravel Routes in a table format                                            | Laravel Package |
| ds()->table(Collection $data, $name);                               | Dumps data in a table format                                                      | Any             |
| ds($var1)->diff($var2);                                             | Checks the difference between two variables                                       | Any             |
| ds($var)->isJson();                                                 | Validates and display JSON data                                                   | Any             |
| ds($var)->contains('Text', caseSensitive: false, wholeWord: false); | Search if the `content` contains the given string                                 | Any             |
| Str::of('hello world')->upper()->ds();                              | Displays the current string in a Stringable macro                                 | Laravel Package |
| collect(['hello', 'world'])->ds();                                  | Displays the current state of a Collection Macro                                  | Laravel Package |
| ds()->markdown('# Hi, Anand Pilania!');                             | Displays the markdown rendered as HTML.                                           | Laravel Package |
| ds()->phpinfo();                                                    | Dumps PHP configuration                                                           | Any             |
| ds()->coffee();                                                     | ☕ Grab a coffee!                                                                  | Any             |
| vendor/bin/laradumps configure                                      | LaraDumps configuration wizard                                                    | Any             |
| vendor/bin/laradumps check                                          | Scan files for ds(); declarations. Useful before sending app to production        | Any             |


---
