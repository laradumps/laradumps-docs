# Installation

With LaraDumps, you can go right into debugging with minimal effort:

1. Download the [LaraDumps Desktop App](installation.html?id=desktop-app#desktop-app).

2. Install one of the LaraDumps PHP Packages according to your project stack.
   * [Laravel Framework Package](installation.html?id=desktop-app#laravel-package)
   * [PHP Agnostic Framework](installation.html?id=desktop-app#agnostic-php-framework)

3. You may also install the Global LaraDumps package to make LaraDumps available in all projects in your computer.
   * [Global LaraDumps Package](installation.html?id=desktop-app#global-laradumps)

4. Start [Debugging](/debug/introduction.html)!

## Desktop App

LaraDumps Desktop App is available for Windows, Linux and macOS.

Proceed to the installation instructions according to your operating system:

:::tabs
== macOS

#### Install via 🍺 Homebrew

1. First, make sure Homebrew it is up to date. Run the following command:

```bash
brew update
```

2. Then, add Homebrew LaraDumps tap. Run the following command:

```bash
brew tap laradumps/app
```

3. Next, install the LaraDumps app. Run the following command:

```bash
brew install --cask laradumps/app/laradumps
```

Now, just open the App!

📝 **NOTE:** If you receive an "application damaged" error, read the section **Running the app** in this page.

---

To upgrade the app using Homebrew, run:

```bash
brew upgrade --cask laradumps
```

To uninstall the app using Homebrew, run:

```bash
brew uninstall laradumps/app/laradump
```

---

#### Disk image .dmg

Alternatively, you can download and install the LaraDumps App using its disk image.

[Download latest version here](https://github.com/laradumps/app/releases/download/v4.13.9/LaraDumps-4.13.9-universal.dmg )

📝 **NOTE:** If you receive an "application damaged" error, read the section **Running the app** in this page.

---

#### Running the app

Once downloaded, open the file and drag & drop the LaraDumps app into your `Applications` folder.

##### Authorizing the app

The first time you open LaraDumps, you will receive an alert saying `LaraDumps cannot be opened`.

Don't worry! This is just because the app code is not signed with Apple. LaraDumps is not malicious software and all code is open-source.

To `authorize LaraDumps` to run, follow these steps:

1․ Click on the  (Apple logo) on the top menu.

2․ Go to `System Preferences`.

3․ Open the `Security & Privacy` tab.

4․ Click on the 🔒 (lock pad) and enter your password to authenticate.

5․ Click `Open Anyway` for LaraDumps.

6․ Once again, click `Open` when you are prompted about "This is an Internet Application".

Now, LaraDumps should run just fine!

== Linux

### Linux

#### snapcraft

https://snapcraft.io/laradumps

```bash
sudo snap install laradumps
```

### AppImage

[Download latest version here](https://github.com/laradumps/app/releases/download/v4.13.9/LaraDumps-4.13.9.AppImage)

Download the latest application image `LaraDumps-x.x.x.AppImage` from [GitHub](https://github.com/laradumps/app/releases).

Once downloaded, assign **execution permission** to the file:

Click on `Properties`, navigate to `Permissions` and click `Allow to execute file as program`. Now, open the AppImage file to proceed with the installation.

Alternatively, use the Terminal and run the command below:

```shell
chmod u+x ./LaraDumps-4.13.9.AppImage && ./LaraDumps-4.13.9.AppImage
```

*(These steps might slightly change depending on your Linux distribution).*

== Windows

### Windows

[Download latest version here](https://github.com/laradumps/app/releases/download/v4.13.9/LaraDumps-Setup-4.13.9.exe)

Once downloaded, open it and proceed with the installer.

:::

## PHP Packages

### Laravel Package

**Requirements**: PHP 8.2+ and Laravel 11+

1․ Install LaraDumps Package in your Laravel project using [Composer](https://getcomposer.org).

Run the command:

```shell
composer require laradumps/laradumps --dev -W
```

<br/>

2․ Now, configure LaraDumps. Run the command below:

```shell
php artisan ds:init $(pwd)
```

This command will generate a file called `laradumps.yaml` in the root of your project that looks like this:

::: warning
This file is important for correct communication between the desktop app and the Laravel or PHP project.
If your project_path is empty, you must manually add your project's `$(pwd)` to `app.project_path`
:::

```yaml
app:
   dispatcher: curl
   primary_host: 127.0.0.1
   secondary_host: host.docker.internal
   port: 9191
   workdir: /var/www/html/
   project_path: /Users/luan.freitas/Dev/upload-flow/laravel-project/
   wsl_config: wsl+Ubuntu/
config:
   sleep: 0
   macos_auto_launch: false
observers:
   auto_invoke_app: false
   enabled_in_testing: false
   dump: false
   original_dump: true
   queries: false
   slow_queries: false
   mail: false
   logs: true
   http: false
   jobs: false
   commands: false
   scheduled_commands: false
   gate: false
   cache: false
   brain: false
xdebug:
   client_host: 0.0.0.0
   client_port: 9003
code_snippet:
   above: 7
   below: 3
logs:
   info: true
   warning: true
   emergency: true
   alert: false
   debug: true
   error: true
   critical: true
   notice: true
   vendor: true
   deprecated_message: true
slow_queries:
   threshold_in_ms: 500
extra:
   context: false
queries:
   explain: false
```

> See full information in [configuration options](configuration.md).

### Agnostic PHP Framework

**Requirements**: PHP 8.2+

1․ Install LaraDumps Package in your PHP project using [Composer](https://getcomposer.org).

Run the command:

```shell
composer require laradumps/laradumps-core --dev
```

<br/>

2․ Now, configure LaraDumps. Run the command below:

```shell
vendor/bin/laradumps init $(pwd)
```

::: info
Similar to Laravel step, a `laradumps.yaml` file will be generated here without the "`observers`" key, which is specific to Laravel.
:::

```yaml
app:
   dispatcher: curl
   primary_host: 127.0.0.1
   secondary_host: host.docker.internal
   port: 9191
   workdir: /var/www/html/
   project_path:
   wsl_config: wsl+Ubuntu/ #wsl+Ubuntu20.04/
config:
   sleep: 0
   macos_auto_launch: false
observers:
   auto_invoke_app: false
   enabled_in_testing: false
xdebug:
   client_host: 0.0.0.0
   client_port: 9003
code_snippet:
   above: 7
   below: 3
```

> See full information in [configuration options](configuration.md).

---

### Global LaraDumps

**Requirements**: PHP 8.2+

1․ You can install the global LaraDumps via [Composer](https://getcomposer.org).

```shell
composer global require laradumps/global-laradumps
```

<br/>

#### How to install

```shell
global-laradumps install
```

<br/>
 
#### How to uninstall

```shell
global-laradumps uninstall
```

---

## Other Clients

LaraDumps provides client libraries for other languages. These clients allow projects written in JavaScript/Node and Go to send dumps to the LaraDumps desktop app. 
See each repository for full usage examples and configuration.

### JavaScript / Node.js

Repository: https://github.com/laradumps/laradumps-js

### Go

Repository: https://github.com/laradumps/laradumps-go
