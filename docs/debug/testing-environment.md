# Testing environment

You may need LaraDumps to behave differently in the testing environment, configuring features only for running tests.

These configuration changes can be useful, for example, if you don't want to dump SQL queries generated by any database activity in your tests.

To configure LaraDumps for your Testing environment, just add the same [configuration keys](/get-started/configuration.md "Configuration") from your `.env` file in the `<php>` section inside your `phpunit.xml`.

Changes in this file are valid for PHPUnit and Pest PHP. These settings will not affect your Dev environment.

---

## Configuration Example

The example below disables [Dump SQL Queries](/get-started/configuration?id=sql-queries "SQL Queries") and [Dump Laravel Logs](/get-started/configuration?id=laravel-logs "Laravel Logs") to the Desktop App while running tests.

The `.env` file has dumping SQL Queries and dump Logs enabled:

```shell
#File .env

APP_NAME=Laravel
APP_ENV=local
#....

DS_APP_HOST=127.0.0.1
DS_APP_PORT=9191
DS_SEND_QUERIES=true
DS_SEND_LOGS=true
#...
```

In the `phpunit.xml` file, both features are disabled:

```xml
<!--File: phpunit.xml-->

<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="./vendor/phpunit/phpunit/phpunit.xsd"
         bootstrap="vendor/autoload.php"
         colors="true">

    <testsuites>
    <!--... -->
    </testsuites>
    <coverage processUncoveredFiles="true">
    <!--... -->
    </coverage>
    <php>
        <env name="APP_ENV" value="testing"/>
        <env name="DS_SEND_QUERIES" value="false"/> <!--Disable sending queries -->
        <env name="DS_SEND_LOGS" value="false"/> <!--Disable sending logs -->
        [...]
    </php>
</phpunit>
```
