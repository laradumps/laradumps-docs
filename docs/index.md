---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "LaraDumps"
  text: "Powerful Debugging for PHP & Laravel"
  tagline: A modern, feature-rich debugging tool that makes PHP development a breeze. Available for Windows, Linux, and macOS.
  
  image:
    src: 'https://raw.githubusercontent.com/laradumps/laradumps-docs/4.x/docs/_media/home.png'
    alt: LaraDumps

  actions:
    - theme: brand
      text: Get Started
      link: /get-started/what-is-laradumps.md
    - theme: alt
      text: Source Code
      link: https://github.com/laradumps/laradumps

features:
  - icon: 🚀
    title: Powerful Debugging
    details: Debug variables, queries, logs, jobs, and more with an intuitive desktop interface. Supports Xdebug integration for step-by-step debugging.
    
  - icon: ⚡️
    title: Real-time Monitoring
    details: Monitor Laravel logs, SQL queries, HTTP requests, jobs, and cache operations in real-time. Perfect for local development and debugging.
    
  - icon: 🛠️
    title: Developer-Friendly
    details: Beautiful UI with custom themes, multiple screens, and comprehensive debugging tools. Works with any PHP project, optimized for Laravel.
    
  - icon: 🔍
    title: Advanced Features
    details: Query debugging, mail preview, model inspection, Livewire debugging, and more. Everything you need for efficient development.

---

<div class="mx-auto max-w-6xl">
  <h2>
    Contributors
  </h2>
 
  <Contributors class="mb-10" />
</div>

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #F7E27E 70%, #E1DAE6 40%);
  --vp-home-hero-image-filter: blur(44px);
  --vp-c-brand-1: #E6B800;
  --vp-c-brand-2: #D4A500;
  --vp-c-brand-3: #C29200;
  --vp-button-brand-bg: #E6B800;
  --vp-button-brand-hover-bg: #D4A500;
  --vp-button-brand-active-bg: #C29200;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
