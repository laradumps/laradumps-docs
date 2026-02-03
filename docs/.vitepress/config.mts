import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

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
        href: `https://raw.githubusercontent.com/laradumps/laradumps-docs/refs/heads/4.x/docs/_media/web_icon.png`,
      },
    ],
    ['meta', { name: 'og:title', content: 'LaraDumps'}],
    ['meta', { name: 'og:description', content: 'Welcome to LaraDumps, a friendly app designed to boost your PHP coding and debugging experience.'}],
    ['meta', { name: 'application-name', content: 'LaraDumps' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'LaraDumps' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'theme-color', content: '#D4A500' }],
  ],
  markdown: {
    toc: {
      level: [2, 2],
    },
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
    anchor: { level: [1, 2, 3] },
  },
  appearance: 'dark',
  lang: 'en-US',
  themeConfig: {
    outline: [2, 3],
    logo: 'https://raw.githubusercontent.com/laradumps/laradumps-docs/refs/heads/4.x/docs/_media/web_icon.png',
    siteTitle: 'LaraDumps',
    nav: [
      { text: 'Guide', link: '/' },
      {
        text: 'Release Notes',
        link: 'https://github.com/laradumps/app/releases',
      },
    ],
    sidebar: [
      {
        text: 'News Coverage',
        items: [
          { text: '📣 Release Notes', link: '/news-coverage/release-notes.md' },
          { text: '⬆️ Upgrade Guide', link: '/news-coverage/upgrade-guide.md' },
          { text: '🛟 Support & Source Code', link: '/news-coverage/support-and-sourcecode.md' },
        ],
        collapsed: false
      },
      {
        text: 'Get Started',
        items: [
          { text: '👀 What is LaraDumps?', link: '/get-started/what-is-laradumps.md' },
          { text: '📦 Installation', link: '/get-started/installation.md' },
          { text: '🔄 Updating LaraDumps', link: '/get-started/updating-laradumps.md' },
          { text: '⚙️ Configuration', link: '/get-started/configuration.md' },
          { text: '🔒 Remote Servers (SSH)', link: '/get-started/ssh.md' },
        ],
        collapsed: false
      },
      {
        text: 'Debug Tools & Integrations',
        items: [
          { text: '📖 Introduction', link: '/debug/introduction.md' },
          { text: '🐘 PHP', link: '/debug/php.md' },
          { text: '🧰 Laravel', link: '/debug/laravel.md' },
          { text: '🔌 Livewire/Volt', link: '/debug/livewire.md' },
          { text: '✅ Pest PHP', link: '/debug/pest.md' },
          { text: '🐛 Xdebug', link: '/debug/xdebug.md' },
          { text: '🚀 Deploying to production', link: '/debug/deploying-to-production.md' },
          { text: '📝 Reference sheet', link: '/debug/reference-sheet.md' },
          { text: '🤖 MCP Server', link: '/debug/mcp-server.md'  }
        ],
        collapsed: false
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
