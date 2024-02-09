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
        href: `/_media/logomark@2x.png`,
      },
    ],
    ['meta', { name: 'og:title', content: 'Livewire PowerGrid'}],
    ['meta', { name: 'og:description', content: 'Livewire PowerGrid is a component for generating dynamic tables with your Laravel Models and Collections.'}],
    ['meta', { name: 'application-name', content: 'Livewire PowerGrid' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Livewire PowerGrid' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  appearance: 'dark',
  lang: 'en-US',
  themeConfig: {
    logo: '/_media/logomark@1x.png',
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
          { text: 'Testing environment', link: '/debug/testing-environment.md' },
          { text: 'Deploying to production', link: '/debug/deploying-to-production.md' },
          { text: 'Reference sheet', link: '/debug/reference-sheet.md' },
        ],
        collapsed: false
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/laradumps/laradumps-docs' },
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
