# What is LaraDumps?

LaraDumps is a desktop app for debugging PHP and Laravel. Your code sends data with `ds()`, and the app shows it in its own window. The request keeps running.

<DumpPreview />

## Why not `dd()`?

| | `dd()` / `dump()` | `ds()` |
|---|---|---|
| Request | Stops at `dd()` | Keeps running |
| Output | Mixed into the page | Separate window |
| After a reload | Gone | Kept |
| API, queue, CLI | Hard to see | Same window |

## What you can inspect

- **Variables**: arrays, objects, models, JSON and tables. See [PHP](/debug/php).
- **Laravel**: queries, logs, jobs, mail, cache, routes. See [Laravel](/debug/laravel).
- **Livewire**: component state as it changes. See [Livewire](/debug/livewire).
- **Tests**: dumps from Pest. See [Pest](/debug/pest).
- **Step debugging**: breakpoints with [Xdebug](/debug/xdebug).
- **AI agents**: read dumps through the [MCP server](/debug/mcp-server).

## Next step

[Install LaraDumps](/get-started/installation) and send your first dump.

## Community

### Articles

- [Powerful Debugging for PHP & Laravel with LaraDumps](https://laravel-news.com/laradumps), Laravel News
- [A free and open-source alternative to Spatie's Ray](https://www.amitmerchant.com/free-open-source-alternative-spatie-ray-debug-php-applications/), by Amit Merchant
- [LaraDumps on Made with Laravel](https://madewithlaravel.com/laradumps)

### Videos

- [LaraDumps: A Package for Better dd() in Laravel/PHP](https://www.youtube.com/watch?v=1c2MT2d00EE), by Povilas Korop, Laravel Daily (English)
- [Como Debugar Aplicações Laravel Daqui Pra Frente](https://www.youtube.com/watch?v=IJqJGvEhqp0), by Tio Jobs (Portuguese)
- [Laravel: Debugging de Tus Aplicaciones con LaraDumps](https://www.youtube.com/watch?v=R-5SlKBt72w), by Code with Luis (Spanish)
- [Un super outil GRATUIT pour débugger vos applications Laravel !](https://www.youtube.com/watch?v=Go55pP5rIgY), by Laravel Jutsu (French)

## Credits

Built with Electron, Vue 3, Tailwind CSS 4 and daisyUI 5. Inspired by [Spatie Ray](https://github.com/spatie/ray).

Created by [Luan Freitas](https://github.com/luanfreitasdev). Logo by [Vitor S. Rodrigues](https://github.com/vs0uz4).
