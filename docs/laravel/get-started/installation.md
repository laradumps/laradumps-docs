# Installation

With LaraDumps, you can go right into debugging with minimal effort:

To begin, download the [LaraDumps Desktop App](laravel/get-started/installation?id=desktop-app).

Next, add the [LaraDumps Laravel Package](laravel/get-started/installation?id=laravel-package) to your Laravel project.

---

## Desktop App

LaraDumps Desktop App is available for Windows, Linux and macOS.

Proceed to the installation instructions according to your operating system:

<!--LaraDumpsVersion-->

<!-- tabs:start -->

#### **Windows**

Click to [`Download LaraDumps v1.4.0`](https://github.com/laradumps/app/releases/download/v1.4.0/LaraDumps-Setup-1.4.0.exe) installer for Windows.

Once downloaded, open it and proceed with the installer.

#### **Linux**

#### Snapcraft

Download from [https://snapcraft.io/laradumps](https://snapcraft.io/laradumps)

#### AppImage

Download the latest application image `LaraDumps-x.x.x.AppImage` from [GitHub](https://github.com/laradumps/app/releases).

Click to [`Download LaraDumps v1.4.0`](https://github.com/laradumps/app/releases/download/v1.4.0/LaraDumps-1.4.0.AppImage) application image for Linux.

Once downloaded, assign **execution permission** to the file:

Click on `Properties`, navigate to `Permissions` and click `Allow to execute file as program`. Now, open the AppImage file to proceed with the installation.

Alternatively, use the Terminal and run the command below:

```shell
chmod u+x ./LaraDumps-1.4.0.AppImage && ./LaraDumps-1.4.0.AppImage
```

*(These steps might slightly change depending on your Linux distribution).*

#### **macOS**

Click to [`Download LaraDumps v1.4.0`](https://github.com/laradumps/app/releases/download/v1.4.0/LaraDumps-1.4.0.dmg) Apple Disc Image (.dmg) for macOS.

Once downloaded, open the file and drag & drop the LaraDumps app into your `Applications` folder.

#### Authorizing the app

The first time you open LaraDumps, you will receive an alert saying `LaraDumps cannot be opened`.

Don't worry! This is just because the app code is not signed with Apple. LaraDumps is not a malicious software and all code is open-source.

To `authorize LaraDumps` to run, follow these steps:

1․ Click on the  (Apple logo) on the top menu.

2․ Go to `System Preferences`.

3․ Open the `Security & Privacy` tab.

4․ Click on the 🔒 (lock pad) and enter your password to authenticate.

5․ Click `Open Anyway` for LaraDumps.

6․ Once again, click `Open` when you are prompted about "This is an Internet Application".

Now, LaraDumps should run just fine!

<!-- tabs:end -->

<!--EndOfLaraDumpsVersion-->
---

## Laravel Package

**Requirements**: PHP 8.0+ and Laravel 8.75+

1․ Install LaraDumps Package in your Laravel project using [Composer](https://getcomposer.org).

Run the command:

```shell
composer require laradumps/laradumps --dev
```

<br/>

2․ Now, configure LaraDumps. Run the command below:

```shell
php artisan ds:init
```

The wizard will guide you through the [configuration options](laravel/get-started/configuration.md).

---

Next: [Desktop App](laravel/get-started/desktop-app.md "Desktop App")
