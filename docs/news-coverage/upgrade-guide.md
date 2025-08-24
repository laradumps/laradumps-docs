# Upgrade Guide

::: warning
If you are using version 2, you are probably using the Laravel framework. For this some things are necessary.
::: 

### 1 - Update composer dependencies:

:::tabs
== Laravel
```bash
composer require laradumps/laradumps --dev ^4.0 -W 
```

== PHP Agnostic
```bash
composer require laradumps/laradumps-core --dev ^3.0 -W 
```

== Global LaraDumps
```bash
composer global require laradumps/global-laradumps ^3.0
```
:::

