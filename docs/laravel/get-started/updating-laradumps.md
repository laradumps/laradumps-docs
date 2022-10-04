# Updating LaraDumps

 LaraDumps checks for updates every time the app starts, and it will notify you if a new version has been released.

There are two types of notifications: [Desktop App](laravel/get-started/installation?id=desktop-app) updates and [Laravel Package](laravel/get-started/installation?id=laravel-package) updates.

---

## Desktop App

To update the App, Linux and Windows users can simply proceed with the self-update process. This process will download and install the latest available version on your computer.

<!--LaraDumpsVersion-->
For macOS, LaraDumps requires the user to manually [`download`](https://github.com/laradumps/app/releases/download/v1.2.3/LaraDumps-1.2.3.dmg) and install the application. Automatic update is not available due to limitations imposed by Apple.
<!--EndOfLaraDumpsVersion-->

---

## Laravel Package

The Laravel package can be upgraded using [Composer](https://getcomposer.org). Just run:

```shell
composer upgrade laradumps/laradumps
```

---

Next: [Desktop App](laravel/get-started/desktop-app.md "Desktop App")
