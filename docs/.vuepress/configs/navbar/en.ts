import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    {
        text: 'Get Started',
        link: '/get-started/what-is-laradumps',
    },
    {
        text: 'Debugging',
        children: [
            '/debug/usage.md',
            '/debug/livewire.md',
            '/debug/deploying-to-production.md',
            '/debug/reference-sheet.md',
        ],
    },
]
