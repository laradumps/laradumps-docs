# 🚀 LaraDumps

> Elevate your Laravel debugging experience with a powerful desktop app

## ✨ Why LaraDumps?

LaraDumps is primarily designed for [Laravel](https://laravel.com) developers, offering a seamless debugging experience with Laravel-specific features. While it works great with pure PHP projects, it truly shines when used with Laravel:

```php
// Laravel-specific features
ds()->model($user);           // Laravel model inspection with relationships
ds()->query($users);          // Query debugging with execution time
ds()->markdown($markdown);    // Preview markdown content
ds()->routes();               // Routes inspection
ds()->mailable($welcomeMail); // Preview mailables

// Standard PHP debugging
ds('Hello LaraDumps!');      // Values and variables
ds()->table($array);         // Array/Object as table
ds()->time('Process');       // Performance tracking
ds()->json($response);       // JSON formatting
ds('My red dump')->red();    // Custom styling 
ds()->label('Important');    // Custom label
```

## 🔥 Key Features

- ⚡ **Laravel Integration** - Deep integration with Laravel's ecosystem
- 🎯 **Framework Tools** - Special features for Models, Queries, and Mail
- 🖥️ **Cross-platform** - Desktop app for Windows, Linux, and macOS
- 🎨 **Beautiful UI** - Clean and intuitive interface
- 🚀 **Performance** - Minimal impact on your application
- 🔌 **PHP Compatible** - Also works with pure PHP projects
- 🛠️ **Rich Debugging** - Tables, Models, Time tracking, and more

## 🌟 Open Source

LaraDumps is completely open source! Check our repositories:

- [🖥️ Desktop App](https://github.com/laradumps/app) - Built with Vue 3
- [📦 Laravel Package](https://github.com/laradumps/laradumps) - Laravel integration
- [🔧 Core Package](https://github.com/laradumps/laradumps-core) - Framework-agnostic debugging
- [🌍 Global Package](https://github.com/laradumps/global-laradumps) - Global installation via composer

---

Next: [Installation](get-started/installation.md "Installation")
