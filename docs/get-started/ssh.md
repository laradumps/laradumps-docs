# Remote Server

When connected to a remote server, LaraDumps securely transfers the output of `ds()` function calls from your server to your local machine via **SSH**.

## Package setup

❗ In order to use this feature, you **must** install LaraDumps package without the `--dev` flag.

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

### App setup

* Click the "**SSH Connection**" icon in the top-right corner of the LaraDumps app.

![Output](/_media/ssh/ssh-1.png)

* Click "Add Connection" 

![Output](/_media/ssh/ssh-2.png)

* Add your server credentials 

![Output](/_media/ssh/ssh-3.png)

* Enable connection

![Output](/_media/ssh/ssh-4.png)

