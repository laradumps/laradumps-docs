# Upgrade Guide

::: warning
If you are using version 1, you are probably using the Laravel framework. For this some things are necessary.
::: 

### 1 - Update dependencies:

```
composer require laradumps/laradumps -W --dev
```

This will also install the `laradumps/laradumps-core` package as a dependency.

### 2 - Clear v1.

Run this command:

```shell
vendor/bin/laradumps clear-v1-config
```

or do these steps manually:

* Remove the `config/laradumps.php` file
* Comment out or completely delete environment variables in the .env file
  or simply run the command:

If you are in Laravel Sail, run:

```bash
sail php vendor/bin/laradumps clear-v1-config.
```

### 3 - Configure your project with the app

Download the latest app version (2.x), open it and set the environment variables using the command:

```bash
vendor/bin/laradumps configure
```

Or do it manually. Copy and paste these keys into your .env file"

```dotenv
DS_APP_HOST=127.0.0.1 // "host.docker.internal" when using docker
DS_INSTALLED=true
  
DS_AUTO_CLEAR_ON_PAGE_RELOAD=false
DS_AUTO_INVOKE_APP=false
DS_SEND_COLOR_IN_SCREEN=
DS_SEND_QUERIES=false
DS_SEND_LOGS_APPLICATIONS=false
DS_SEND_LOGS_VENDOR=false
DS_SEND_HTTP_CLIENT_REQUESTS=false
DS_SEND_JOBS=false
DS_SEND_CACHE=false
DS_SEND_COMMANDS=false
DS_SEND_HTTP=false
DS_SEND_SCHEDULED_COMMANDS=false
DS_SEND_GATE=false
DS_FILE_HANDLER=subl://open?url=file://{filepath}&line={line}
DS_PROJECT_PATH=
```
