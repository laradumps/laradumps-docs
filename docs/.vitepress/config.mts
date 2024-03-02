import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "LaraDumps",
  description: "A LaraDumps Docs",
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/_media/web_icon.png`,
      },
    ],
    ['meta', { name: 'og:title', content: 'LaraDumps'}],
    ['meta', { name: 'og:description', content: 'Welcome to LaraDumps, a friendly app designed to boost your PHP coding and debugging experience.'}],
    ['meta', { name: 'application-name', content: 'LaraDumps' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'LaraDumps' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  markdown: {
    toc: {
        level: [2, 2],
      },
        anchor: { level: [1, 2, 3] },
  },
  appearance: 'dark',
  lang: 'en-US',
  themeConfig: {
    outline: [2, 3],
    logo: '/_media/web_icon.png',
    siteTitle: 'LaraDumps',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'What is LaraDumps?', link: '/get-started/what-is-laradumps.md' },
          { text: 'Release Notes', link: '/get-started/release-notes.md' },
          { text: 'Upgrade Guide', link: '/get-started/upgrade-guide.md' },
          { text: 'Installation', link: '/get-started/installation.md' },
          { text: 'Updating LaraDumps', link: '/get-started/updating-laradumps.md' },
          { text: 'Configuration', link: '/get-started/configuration.md' },
        ],
        collapsed: false
      },
      {
        text: 'Debugging',
        items: [
          { text: 'Usage', link: '/debug/usage.md' },
          { text: 'Laravel', link: '/debug/laravel.md' },
          { text: 'Testing environment', link: '/debug/testing-environment.md' },
          { text: 'Deploying to production', link: '/debug/deploying-to-production.md' },
          { text: 'Reference sheet', link: '/debug/reference-sheet.md' },
        ],
        collapsed: true
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/laradumps/laradumps' },
      { icon: 'twitter', link: 'https://twitter.com/luanfreitasdev' },
    ],
    footer: {
      message: 'Created By Luan Freitas',
    },
    editLink: {
      pattern: 'https://github.com/laradumps/laradumps-docs/edit/2x/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  sitemap: {
    hostname: 'https://laradumps.dev'
  }
})
