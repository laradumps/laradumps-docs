import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `/_media/logo.png`,
        },
    ],
    ['meta', { name: 'og:title', content: 'LaraDumps'}],
    ['meta', { name: 'og:description', content: 'LaraDumps'}],
    ['meta', { name: 'application-name', content: 'LaraDumps' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'LaraDumps' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]
