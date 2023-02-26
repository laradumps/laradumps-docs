# Deploying to production

Since LaraDumps is a debug `dev` tool, you might want to check if you forgot a `ds()` somewhere in your code before you deploy your app to production.

LaraDumps provides the command `php artisan ds:check` which will produce an error if any `ds()` is found in your code.

::: warning
⚠️ You must specify which directories will be scanned in [config file](/get-started/configuration?id=ds-check).
:::

## Pipeline

You can also add a custom `verify` script in your `composer.json`, and run `composer verify` in your deployment pipeline (CI/CD).

Example script:

```json
"scripts": {
   "ds:check": "@php artisan ds:check",
   "verify": [
         "@ds:check",
         // ..
   ],
}
```

If any `ds()` is found, the `ds:check` command will indicate you the file, line and code snippet.

![Output](/_media/ds_check_error.png)

If you have not forgotten any `ds()`, your pipeline will be completed successfully.

![Output](/_media/ds_check_success.png)

---

::: tip
You can use **--dirty** to only track files that haven't been added to git for quick checks - Inspired by [Laravel Pint](https://github.com/laravel/pint/pull/130)
:::

```bash
php artisan ds:check --dirty
```
