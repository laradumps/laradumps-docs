# Installation

## Laravel Project

Install LaraDumps in your Laravel project via composer.

**Requirements**: PHP 8.0+ and Laravel 8.75+

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

Once downloaded, you must make the file executable. Via terminal, run: `chmod u+x laradumps-x.x.x.AppImage`.

Alternatively, click on "Properties", navigate to "Permissions" and click "Allow to execute file as program".

Run the AppImage file.

*(These steps might change based on your Linux distribution).*

#### **MacOS**

Download the latest Apple image `LaraDumps-x.x.x.dmg` from [GitHub](https://github.com/laradumps/app/releases).

Once downloaded, open the file and drag & drop the LaraDumps app into your `Applications` folder.

The first time you open LaraDumps, you will be prompted with an alert․ Don't worry, this happens because the app code is not signed with Apple.

LaraDumps is not a malicious software and all code is open-source, you can check it yourself!

Authorize LaraDumps to run, follow these steps:

1․ Click "Open" in the alert box.

2․ Open System Preferences.

3․ Go to the Security & Privacy tab.

4․ Click on the lock and enter your password, so you can make changes.

5․ Click "Open Anyway" for LaraDumps.

<!-- tabs:end -->
