# Deploying to production

`ds()` is a development tool. Run `check` before you deploy to find any call you left behind.

```bash
vendor/bin/laradumps check --dir=app,routes,config
```

The command lists each match with file, line and code, and exits with an error if it finds one. It needs no configuration file or environment variable.

```text
ERROR - Found 3 errors / 1 file
```

## Options

| Option | Description |
|---|---|
| `--dir` | Directories to search, comma-separated. Required. |
| `--text` | Words to search for, comma-separated. Default: `ds,dsq,dsd,ds1,ds2,ds3,ds4,ds5`. |
| `--extension` | File extensions to search, comma-separated. |
| `--exactly` | Search for exact occurrences. |
| `--ignore` | Directories to skip, comma-separated. |
| `--ignore-files` | Files to skip, comma-separated. |
| `--dirty` | Search only files that are dirty in git. |
| `stop-on-failure` | Argument. Stop at the first match. |

```bash
vendor/bin/laradumps check --dir=app --dirty
```

## Run it in CI

Add a Composer script and call it from your pipeline.

```json
"scripts": {
    "ds:check": "@php vendor/bin/laradumps check --dir=app,routes,config --text=dump,dd",
    "verify": [
        "@ds:check"
    ]
}
```

```bash
composer verify
```

## Next step

For architecture tests that catch leftover debug code, see [Pest](/debug/pest#architecture-test).
