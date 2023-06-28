# Installation

With LaraDumps, you can go right into debugging with minimal effort:

1 - Download the [LaraDumps Desktop App](installation?id=desktop-app).

2 - Add the LaraDumps PHP Package:
   * [Agnostic PHP Framework](https://github.com/laradumps/laradumps-core) 
   * [Laravel Package](https://github.com/laradumps/laradumps)
   * [Global LaraDumps Package](https://github.com/laradumps/global-laradumps)

3․ Start to [Debug](../debug/usage.html)!

---

## Desktop App

LaraDumps Desktop App is available for Windows, Linux and macOS.

Proceed to the installation instructions according to your operating system:

<!--LaraDumpsVersion-->

### **Windows**

Click to [`Download LaraDumps v2.0.2`](https://github.com/laradumps/app/releases/download/v2.0.2/LaraDumps-Setup-2.0.2.exe) installer for Windows.

Once downloaded, open it and proceed with the installer.

### **Linux**

#### Snapcraft

Download from [https://snapcraft.io/laradumps](https://snapcraft.io/laradumps)

#### AppImage

Download the latest application image `LaraDumps-x.x.x.AppImage` from [GitHub](https://github.com/laradumps/app/releases).

Click to [`Download LaraDumps v2.0.2`](https://github.com/laradumps/app/releases/download/v2.0.2/LaraDumps-2.0.2.AppImage) application image for Linux.

Once downloaded, assign **execution permission** to the file:

Click on `Properties`, navigate to `Permissions` and click `Allow to execute file as program`. Now, open the AppImage file to proceed with the installation.

Alternatively, use the Terminal and run the command below:

```shell
chmod u+x ./LaraDumps-2.0.2.AppImage && ./LaraDumps-2.0.2.AppImage
```

*(These steps might slightly change depending on your Linux distribution).*

### **macOS**

Click to [`Download LaraDumps v2.0.2`](https://github.com/laradumps/app/releases/download/v2.0.2/LaraDumps-2.0.2-universal.dmg) Apple Disc Image (.dmg) for macOS.

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

<!--EndOfLaraDumpsVersion-->
---

## Laravel Package

**Requirements**: PHP 8.0+ and Laravel 8.75+

1․ Install LaraDumps Package in your Laravel project using [Composer](https://getcomposer.org).

Run the command:

```shell
composer require laradumps/laradumps
```

<br/>

2․ Now, configure LaraDumps. Run the command below:

```shell
vendor/bin/laradumps configure
```

## Agnostic PHP Framework

**Requirements**: PHP 8.0+

1․ Install LaraDumps Package in your PHP project using [Composer](https://getcomposer.org).

Run the command:

```shell
composer require laradumps/laradumps-core --dev
```

<br/>

2․ Now, configure LaraDumps. Run the command below:

```shell
vendor/bin/laradumps configure
```
The wizard will guide you through the [configuration options](configuration.md).

---

## Global LaraDumps

**Requirements**: PHP 8.0+

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
