# Desktop App

This is the LaraDumps Desktop App window, here you will receive the output of your `ds()` debugs.

The following image shows an example of a dump lists the main items available at the App.

<img src="(../../_media/app.png" alt="app" width="500">

LaraDumps Desktop App functionalities:

- *Screens*: In this section, you will see the list of screens specified with `ds()->toScreen()` function.
- *Label*: Each dump has its own label. Read more about [Labels](laravel/debug/usage?id=label).
- *Color tag*: Each dump has its own color tag. Read more about [Color tags](laravel/debug/usage?id=color-tag).
- *Save*: Click here to save and preserve the dump when the screen is cleared.
- *File & line number*: This label shows the file and line where the `ds()` was called from. Click on it to open the file in your preferred IDE.
- **Button #1:** Clear all screens
- **Button #2:** Lists of files of each dump.
- **Button #3:** Collapse/Expand all dumps.
- **Button #4:** Toggle privacy mode. In privacy mode, the filename and SQL connections are hidden. This is useful when you need to share a screenshot.
- **Button #5:** Saved dumps.
- **Button #6:** Re-order: Allows you to drag and re-organize your dumps sequence.
- **Button #7:** Toggle window "Always on top".
- **Button #8:** Toggle Light/Dark Mode.
