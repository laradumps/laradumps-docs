# Updating LaraDumps

 LaraDumps checks for updates every time the app starts, and it will notify you if a new version has been released.

There are two types of notifications: [Desktop App](laravel/get-started/installation?id=desktop-app) updates and [Laravel Package](laravel/get-started/installation?id=laravel-package) updates.

## Desktop App

To update the App, Linux and Windows users can simply proceed with the self-update process. This process will download and install the latest available version on your computer.

For macOS, due to Apple restrictions, users will have to download the latest release from [GitHub](https://github.com/laradumps/app/releases) and install it manually.

## Laravel Package

The Laravel package can be upgraded using [Composer](https://getcomposer.org). Just run:

```shell
composer upgrade laradumps/laradumps
```
