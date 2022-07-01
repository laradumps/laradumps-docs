# Reference

| Call                                 | Description                                                                              |
|--------------------------------------|------------------------------------------------------------------------------------------|
| ds($var)                             | Display a string, array or object                                                        |
| ds($var1, $var2)                     | Display multiples arguments                                                              |
| ds(...)->danger()                    | Output in red                                                                            |
| ds(...)->dark()                      | Output in black                                                                          |
| ds(...)->warning()                   | Output in orange                                                                         |
| ds(...)->info()                      | Output in blue                                                                           |
| ds(...)->color('bg-slate-500')       | Send custom color: https://tailwindcss.com/docs/customizing-colors#default-color-palette |
| ds()->diff($text1, $text2)           | Check the difference between two texts                                                   |
| ds()->label('Label')                 | Send custom label                                                                        |
| ds()->queriesOn('Label')             | Display all queries that are executed with custom label                                  |
| ds()->queriesOff();                  | Stop displaying queries                                                                  |
| ds($string)->isJson()                | Send JSON data and validate                                                              |
| ds()->toScreen('Screen Name')        | Add new screen - default: 'screen 1'                                                     |
| ds()->s('Screen Name')               | Add new screen                                                                           |
| ds1($var)                            | Send dump to 'screen 1'                                                                  |
| ds2($var)                            | Send dump to 'screen 2'                                                                  |
| ds3($var)                            | Send dump to 'screen 3'                                                                  |
| ds4($var)                            | Send dump to 'screen 4'                                                                  |
| ds5($var)                            | Send dump to 'screen 5'                                                                  |
| ds()->phpinfo()                      | Send PHPInfo                                                                             |
| dsd($var);                           | Send dump and die                                                                        |
| ds($var)->contains('Text')           | Search if content contains string                                                        |
| ds()->routes()                       | Send routes in table view                                                                |
| ds()->table(Collection $data, $name) | Send table                                                                               |
| ds()->die()                          | Send dump and die                                                                        |

<hr/>
<footer style="float: right; font-size: larger">
    <span><a style="text-decoration: none;" href="#/get-started/installation">Installation →</a></span>
</footer>