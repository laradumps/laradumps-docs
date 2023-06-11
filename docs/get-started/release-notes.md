# Release Notes

### LaraDumps v2 is now available!

### New App made in Vue 3

The first version of LaraDumps was developed using Javascript and AlpineJS, this made it difficult to maintain for new features and also for updating external libraries. 

Because of this, it was necessary to rewrite it with Vue 3, typescript, and Vite allowing greater support to the open-source community.

#### What's new?

* Made with Vue 3
* Framework Agnostic PHP
* Screen Cleaner
* Global shortcuts (clear all, dark mode, always on top, toggle menu)
* Multi-Language
* Global Composer
* Filter by color
* Load environment using Desktop App
* Global search
* Time duration in query payload

### PHP package

In this release, all the core resources that are needed to debug anything in PHP have been extracted into another repository [laradumps/laradumps-core](https://github.com/laradumps/laradumps-core). 

This allows running `laradumps-core` on any system that uses PHP 8.0 without a framework!

::: tip
Now, `laradumps/laradumps` makes use of `laradumps/laradumps-core`, but with some features unique to working in the Laravel Framework (Queries, Logs, Commands, Cache, etc).

With `laradumps-core`, we also can install it globally (this will come in the future).
:::
