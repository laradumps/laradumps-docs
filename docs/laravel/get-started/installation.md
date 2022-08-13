# Installation

To start debugging with LaraDumps you must download the **LaraDumps Desktop App** and then, install the **LaraDumps package** in the Laravel project you are currently working on.

## Laravel Package

**Requirements**: PHP 8.0+ and Laravel 8.75+

Install LaraDumps Package in your Laravel project using [Composer](https://getcomposer.org).

Run the command:

```bash
composer require laradumps/laradumps --dev
```

Once installed, you must configure LaraDumps, run:

```bash
php artisan ds:init
```

The Init wizard will guide you through the basic setup.

For more information, read the [Configuration](laravel/get-started/configuration.md) section.

## Desktop App

LaraDumps Desktop App is available for Windows, Linux and MacOS.

Proceed to the installation instructions for your operating system:

<!-- tabs:start -->

#### **Windows**

Download the latest Windows executable file `LaraDumps-Setup-x.x.x.exe` from [GitHub](https://github.com/laradumps/app/releases).

Once downloaded, open it and proceed with the installer.

#### **Linux**

Download the latest application image `LaraDumps-x.x.x.AppImage` from [GitHub](https://github.com/laradumps/app/releases).

Once downloaded, you must make the file executable. Via terminal, run: `chmod u+x LaraDumps-x.x.x.AppImage`.

Alternatively, click on "Properties", navigate to "Permissions" and click "Allow to execute file as program".

Run the AppImage file.

*(These steps might change based on your Linux distribution).*

#### **MacOS**

Download the latest Apple image `LaraDumps-x.x.x.dmg` from [GitHub](https://github.com/laradumps/app/releases).

Once downloaded, open the file and drag & drop the LaraDumps app into your `Applications` folder.

The first time you open LaraDumps, you will be prompted with an alert․ Don't worry, this happens because the app code is not signed with Apple.

LaraDumps is not a malicious software and all code is open-source, you can check it yourself!

To authorize LaraDumps to run, follow these steps:

1․ Click on the  (Apple logo) on the top menu.

2․ Go to `System Preferences`.

3․ Open the `Security & Privacy` tab.

4․ Click on the 🔒 (lock pad) and enter your password to authenticate.

5․ Click `Open Anyway` for LaraDumps.

6․ Once again, click `Open` when you are prompted about "This is an Internet Application".

Now, LaraDumps should run just fine!

<!-- tabs:end -->
