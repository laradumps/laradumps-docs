# Deploying to production

Since LaraDumps is a debug `dev` tool, you might want to check if you forgot a `ds()` somewhere in your code before you deploy your app to production.

LaraDumps provides the command `vendor/bin/laradumps check` which will produce an error if any `ds()` is found in your code.

## Pipeline

You can also add a custom `verify` script in your `composer.json`, and run `composer verify` in your deployment pipeline (CI/CD).

Example script:

```json
"scripts": {
   "ds:check": "@php vendor/bin/laradumps check --dir=app,routes,config --text=dump,dd",
   "verify": [
         "@ds:check",
         // ..
   ],
}
```

If any `ds()` is found, the `check` command will indicate you the file, line and code snippet.

::: tip
Does not require environment variables or configuration files. Only via argument in the terminal:
:::

#### Arguments

* You can pass some arguments, `--dir` is required
* Default words: `ds,dsq,dsd,ds1,ds2,ds3,ds4,ds5`

```bash
--dir // Directories that will be filtered separated by comma
--text // Texts that will be searched separated by a comma
--dirty // Search only files that are dirty in git
--ignore // Directories to be ignored separated by comma
--ignore-files // Files that will be ignored separated by a comma
stop-on-failure // Stop the search if a match is found
```

![Output](/_media/ds_check_error.png)

If you have not forgotten any `ds()`, your pipeline will be completed successfully.

![Output](/_media/ds_check_success.png)

---

::: tip
You can use **--dirty** to only track files that haven't been added to git for quick checks - Inspired by [Laravel Pint](https://github.com/laravel/pint/pull/130)
:::

```bash
vendor/bin/laradumps --dirty
```
