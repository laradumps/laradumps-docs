# Configuration

## Publish config

```bash
php artisan vendor:publish --tag=laradumps-config
```

Laravel will create this file for you: `config/laradumps.php`

In this configuration file, you can change the values that are there. For example:

* The host when you are using the docker
* if you want to allow capturing of application queries and logs

> 📝 **Note**: If you are a Linux user, it is not enough to just change the host property to host.docker.internal. Because in Linux this functionality does not happen automatically. [Adding extra_hosts to the compose file stubs for automatic host.docker.internal mapping](https://github.com/laravel/sail/pull/222)

<hr/>
<footer style="float: right; font-size: larger">
    <span><a style="text-decoration: none;" href="#/commands/index">Commands →</a></span>
</footer>
