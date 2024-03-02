# Release Notes

### LaraDumps v3 is now available!

### New
* UI made with [daisyUI](https://daisyui.com/)

* Multi Themes - Now, with built-in integration with daisyui, it's easier to create or add new themes for laradumps!
  * Themes are easily changed through the menu in the "[Themes](https://daisyui.com/docs/themes/)" app. Currently 7 main themes have been added (**Light, Dark, Dracula, Dim, Retro, Halloween, and Cyberpunk**).

![Output](/_media/upgrade-guide-v3/themes.png)

*   Desktop app settings have been migrated to the menu, enabling faster and more efficient maintenance.

![Output](/_media/upgrade-guide-v3/settings.png)

* New listener switcher button at the top of the menu
  * In version 2, you added a project using the `/vendor/bin/laradumps configure` command, but this is no longer necessary,
  * because in version v3 the `laradumps` and `laradumps-core` packages do not read beyond the .env file. To do this you need to run the
  * `/vendor/bin/laradumps init` command and a `laradumps.yaml` file will be generated in the root of your package.
  * When you do your first `ds()`, a new project will be automatically added to the desktop app, and the settings that
  * can be changed (laravel queries, jobs, mail for example) will be changed by the app in the "Signal" icon

![Output](/_media/upgrade-guide-v3/listener.png)

* Reorder, privacy mode, and saved dumps are migrated to the menu
* IDE Handler switcher without menu

![Output](/_media/upgrade-guide-v3/IDE.png)
