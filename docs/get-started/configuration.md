# Configuration

After running the initial configuration command shown in the previous step. 
You will notice that your project will be shown as in the image below, observing the “**signal**” icon.

By clicking on the signal icon, you will be able to see all your projects, toggle the settings, and also remove them.

![Output](/_media/config-example.gif)

::: warning

The settings may change depending on the update of the PHP or Laravel package. 

**Always have the latest versions installed to ensure compatibility between desktop apps**

:::

---

## Configuration options

LaraDumps options and their respective configurations are detailed in this section.

### app.primary_host

Desktop App Host. Your PHP/Laravel project will send Dumps to this address.

You can configure the host in your `laradumps.yaml` file, under the key `app.primary_host`.

In most cases, it will be your localhost:

```yaml
app:
  primary_host: 127.0.0.1
```

You may configure a custom host value, if needed.

| **Environment**             |  **Host**            |
|-----------------------------|----------------------|
| Default                     | 127.0.0.1            |
| Docker/Sail                 | host.docker.internal |
| Homestead with VirtualBox   | 10.211.55.2          |
| Homestead with Parallels    | 10.211.55.2          |
| Wsl Host                    | WSL IP (read below)  |

### app.secondary_host

As a direct alternative, the secondary host can already be configured if you wish to have more than one pre-defined host, such as a "docker connection" using `host.docker.internal`

```yaml
app:
  primary_host: 127.0.0.1
  secondary_host: host.docker.internal // [!code ++]
```

---

#### Docker and Linux

If you are using `Docker` on a `Linux` host, you must perform additional configuration because. Automatic mapping is not available. Read more [here](https://github.com/laravel/sail/pull/222).

#### WSL

If you are running your project directly from the WSL machine, you must configure LaraDumps with the WSL IP.

This is often the case when running `php artisan server` from inside the WSL machine.

The WSL IP changes every time the computer is restarted, and you must update your project configuration when the IP changes.

##### Find out the WSL IP

To determine the WSL IP address, launch Windows Powershell and execute the `ipconfig` command.

You should see an output similar to this:

```shell
C:\Users\user>ipconfig

Windows IP Configuration

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~ some other adapters.... ~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ethernet adapter vEthernet (WSL):

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fda6::4727:7d48:8e61:7d48%60
   IPv4 Address. . . . . . . . . . . : 172.21.48.1 <====================================
   Subnet Mask . . . . . . . . . . . : 255.255.240.0
   Default Gateway . . . . . . . . . :
```

Scroll down to the `Ethernet adapter vEthernet (WSL)` section, disregard other adapters.

Now, add the IP address from this section in your `app.primary_host` or `app.secondary_host` in your `laradumps.yaml` file.

For example:

```yaml
app:
  primary_host: 172.21.48.1
```

---

### Auto-Invoke

By default, LaraDumps Desktop App will be invoked and gain focus whenever a new dump arrives.

To disable this behavior, change the `laradumps.yaml` file key `observers.auto_invoke_app` to `false`.

You can also send [Quiet dumps](../debug/usage?id=quiet-dump) and the app will not be invoked.

```yaml
observers:
  auto_invoke_app: true
```

---

#### VS Code Remote WSL (custom path)

* Windows

```yaml
app:
  project_path: C:\dan\projects\\
  wsl_config: wsl+Ubuntu
```

::: tip
* To get your distro name, run the command `wsl -l -v` in your command prompt.
* To get remote path, you can run the `pwd`  command inside your WSL project folder.
:::

---
