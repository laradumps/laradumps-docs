# Remote server

LaraDumps forwards `ds()` output from a remote server to your machine over SSH.

## Install without `--dev`

The package must be a regular dependency on the server.

:::tabs
== Laravel Project

```bash
composer require laradumps/laradumps
```

== Agnostic PHP Framework

```bash
composer require laradumps/laradumps-core
```

:::

## Add the connection

1. In the app, click the SSH icon in the top-right corner.
2. Click **Add Connection**.
3. Fill in the server details and click **Connect**.
4. Turn the connection on with its toggle.

| Field | Notes |
|---|---|
| Name | Label shown in the connection list. |
| Host | Server address. |
| Port | Defaults to `22`. |
| Authentication Type | Private key (default) or password. |
| Username | SSH user. |
| Private Key Path | With private key. Pick the file, for example `~/.ssh/id_ed25519`. |
| Passphrase | With private key, only if the key has one. |
| Password | With password authentication. |
