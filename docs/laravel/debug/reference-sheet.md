# Reference sheet

LaraDumps usage reference sheet:

<style>
    td::before { display: none }
  <!-- @see https://github.com/docsifyjs/docsify/issues/794 -->
</style>

| **Function**                          | **Description**                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------|
| ds($var)                              | Display a string, array or object                                                        |
| ds($var1, $var2)                      | Display multiples arguments                                                              |
| ds($var)->die()                       | Dump and die                                                                             |
| dsd($var);                            | Alias for dump and die                                                                   |
| ds($var)->label('Label')              | Send dump with a custom label                                                            |
| ds($var)->toScreen('My Screen')       | Adds new screen 'My screen'                                                              |
| ds($var)->s('My Screen')              | Alias for new screen                                                                     |
| ds2($var) ... ds5($var)               | Send dump to pre-defined screens ('screen 2' to 'screen 5')                              |
| ds($var)->info()                      | Blue color tag                                                                           |
| ds($var)->success()                   | Green color tag                                                                          |
| ds($var)->danger()                    | Red color tag                                                                            |
| ds($var)->dark()                      | Black color tag                                                                          |
| ds($var)->warning()                   | Orange color tag                                                                         |
| ds($var)->color('bg-slate-500')       | Color tag using the [Tailwind color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette) |
| ds($var)->queriesOn('My Label')       | Start capturing SQL queries                                                              |
| ds($var)->queriesOff();               | Stop capturing SQL queries                                                               |
| ds()->model(User::query()->first())   | Dumps the Model’s Attributes and Relationships.                                          |
| ds()->routes()                        | Dumps Laravel Routes in a table format                                                   |
| ds()->table(Collection $data, $name)  | Dumps data in a table format                                                             |
| ds($var1)->diff($var2)                | Checks the difference between two variables                                              |
| ds($var)->isJson()                    | Validates and display JSON data                                                          |
| ds($var)->contains('Text', caseSensitive: false, wholeWord: false)            | Search if content contains string                |
| ds()->phpinfo()                       | Dumps PHP configuration                                                                  |
| php artisan ds:init                   | LaraDumps configuration wizard                                                           |
| php artisan ds:check                  | Scan files for ds() declarations. Useful before sending app to production                |
