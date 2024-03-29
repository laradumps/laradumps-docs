# Configuration

The LaraDumps configuration is stored directly in your project's .env file.

You can run `vendor/bin/laradumps configure` to configure the project with the desktop application.

Or if you've already done that, you can simply go to "**Settings**" in the application or change the variable by .env

---

## Configuration options

LaraDumps options and their respective configurations are detailed in this section.

### App Host

Desktop App Host. Your Laravel project will send Dumps to this address.

You can configure the host in your `.env` file, under the key `DS_APP_HOST`.

In most cases, it will be your localhost:

```shell
DS_APP_HOST=127.0.0.1
```

You may configure a custom host value, if needed.

| **Environment**             |  **Host**            |
|-----------------------------|----------------------|
| Default                     | 127.0.0.1            |
| Docker/Sail                 | host.docker.internal |
| Homestead with VirtualBox   | 10.211.55.2          |
| Homestead with Parallels    | 10.211.55.2          |
| Wsl Host                    | WSL IP (read below)  |

#### Docker and Linux

If you are using `Docker` on a `Linux` host, you must perform additional configuration because. Automatic mapping is not available. Read more [here](https://github.com/laravel/sail/pull/222).

#### WSL

If you are running your project directly from the WSL machine, you must configure LaraDumps with the WSL IP.

This is often the case when running `php artisan server` from inside the WSL machine.

The WSL IP changes every time the computer is restarted, and you must update your project configuration when the IP changes.

##### Find out the WSL IP

To determine the WSL IP address, launch Windows Powershell and execute the `ipconfig` command.

You should see an output similar to this:

```shell
C:\Users\user>ipconfig

Windows IP Configuration

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~ some other adapters.... ~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ethernet adapter vEthernet (WSL):

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fda6::4727:7d48:8e61:7d48%60
   IPv4 Address. . . . . . . . . . . : 172.21.48.1 <====================================
   Subnet Mask . . . . . . . . . . . : 255.255.240.0
   Default Gateway . . . . . . . . . :
```

Scroll down to the `Ethernet adapter vEthernet (WSL)` section, disregard other adapters.

Now, add the IP address from this section in your `DS_APP_HOST` in your `.env` file.

For example:

```shell
DS_APP_HOST=172.21.48.1
```

---

### App Port

The Desktop App Port. Must always be `9191`.

```shell
DS_APP_PORT=9191
```

This configuration key will be deprecated in LaraDumps V2

### Auto-Invoke

By default, LaraDumps Desktop App will be invoked and gain focus whenever a new dump arrives.

To disable this behavior, change the `.env` file key `DS_AUTO_INVOKE_APP` to `false`.

You can also send [Quiet dumps](../debug/usage?id=quiet-dump) and the app will not be invoked.

```shell
DS_AUTO_INVOKE_APP=true #enabled
```

---

### SQL Queries

* Only available for [laradumps/laradumps](https://github.com/laradumps/laradumps)

You must have this feature enabled to capture [SQL Queries](laravel/debug/usage?id=sql-queries) and send them to the Desktop App.

To enable this feature, change the `.env` file key `DS_SEND_QUERIES` to `true`.

```shell
DS_SEND_QUERIES=true #enabled
```

---

### Laravel Logs

* Only available for [laradumps/laradumps](https://github.com/laradumps/laradumps)

You must have this feature enabled to send [Laravel Logs](laravel/debug/usage?id=laravel-logs).

To enable this feature, change the `.env` file key `DS_SEND_LOGS` to `true`.

 ```shell
DS_SEND_LOGS=true #enabled
```

---

### Auto-Clear

LaraDumps can automatically clear the screen on page reload. You must include the Auto-Clean Blade directive.

```html
  <!-- Scripts -->
  @if(app()->environment('local'))
      @dsAutoClearOnPageReload
  @endif
</body>
```

This feature is disabled by default. To enable it, change the environment key `DS_AUTO_CLEAR_ON_PAGE_RELOAD` to `true`.

```shell
DS_AUTO_CLEAR_ON_PAGE_RELOAD=true #enabled
```

---

### IDE Handler

Each dump contains a link to the file and line where the `ds()` was called from.

You may configure your preferred IDE to open this project's files.

To set an IDE, change the `.env` file key `DS_FILE_HANDLER` to one of the supported IDEs.

```shell
DS_FILE_HANDLER=phpstorm://open?file={filepath}&line={line} 
```

Supported IDEs:

| **IDE**                          | **Value**                                             |
|----------------------------------|-------------------------------------------------------|
| PHPStorm                         | phpstorm://open?file={filepath}&line={line}           |
| Visual Studio Code               | vscode://file/{filepath}:{line}                       |
| Remote Visual Studio Code (WSL2) | vscode://vscode-remote/                               |
| Sublime                          | subl://open?url=file://{filepath}&line={line}         |
| Atom                             | atom://core/open/file?filename={filepath}&line={line} |

Value can be customized according to platform and IDE configuration. See below for some example configurations.

#### Docker and VSCode

If you are running Docker and using VSCode, you can configure a new editor handler to properly open files from the Desktop App.

Configure your `.env` to use the handler you have just created:

 ```shell
DS_APP_HOST=host.docker.internal
DS_APP_PORT=9191
# other settings...
DS_FILE_HANDLER=phpstorm://open?file={filepath}&line={line} #<============ 
DS_PROJECT_PATH=C:\\dan\\projects\\ #<============ 
```

#### PHPStorm 

* MacOS, Windows & Linux
```shell
DS_FILE_HANDLER=phpstorm://open?file={filepath}&line={line}
DS_PROJECT_PATH=C:\\dan\\projects\\
```

#### VS Code

```shell
DS_FILE_HANDLER=vscode://file/{filepath}:{line}
DS_PROJECT_PATH=
```

#### VS Code Docker

* Windows

```shell
DS_FILE_HANDLER=vscode://file/{filepath}:{line}
DS_PROJECT_PATH=/Users/dan/projects/my-app/
```

#### VS Code Remote WSL (custom path)

* Windows
```shell
DS_PROJECT_PATH=C:\dan\projects\\
DS_FILE_HANDLER=vscode://vscode-remote/wsl+Ubuntu{filepath}:{line} // vscode://vscode-remote/wsl+Ubuntu22{filepath}:{line}
```

* Linux
```shell
DS_PROJECT_PATH=/Users/luan.freitas/Documents/project
DS_FILE_HANDLER=vscode://vscode-remote/wsl+Ubuntu{filepath}:{line}
```

::: tip
* To get your distro name, run the command `wsl -l -v` in your command prompt.
* To get remote path, you can run the `pwd`  command inside your WSL project folder.
:::

---
