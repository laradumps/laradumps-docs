---
layout: home

hero:
  name: "LaraDumps"
  text: "Debug PHP without stopping your app"
  tagline: Send dumps, queries, logs and jobs to a desktop app. Free and open source for macOS, Windows and Linux.
  actions:
    - theme: brand
      text: Get started
      link: /get-started/installation.md
    - theme: alt
      text: What is LaraDumps?
      link: /get-started/what-is-laradumps.md
    - theme: alt
      text: GitHub
      link: https://github.com/laradumps/laradumps

features:
  - icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'
    title: Dumps that don't halt
    details: Call ds() anywhere. The request keeps running and every dump stays in the app.
    link: /debug/php.md
  - icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>'
    title: Queries, logs and jobs
    details: Watch SQL, Laravel logs, queue jobs, mail and cache as they happen.
    link: /debug/laravel.md
  - icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>'
    title: Livewire, Pest and Xdebug
    details: Inspect components, dump inside tests and step through code.
    link: /debug/livewire.md
  - icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z"/></svg>'
    title: MCP server
    details: Let AI agents read what your app sent to LaraDumps.
    link: /debug/mcp-server.md
---

<div class="home-section max-w-6xl">
  <h2>Contributors</h2>
  <Contributors />
</div>
