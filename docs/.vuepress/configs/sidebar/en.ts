import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/get-started/': [
        {
            text: 'Get Started',
            children: [
                '/get-started/installation.md',
                '/get-started/updating-laradumps.md',
                '/get-started/configuration.md',
                '/get-started/desktop-app.md',
            ],
        },
    ],
    '/debug/': [
        {
            text: 'Debugging',
            children: [
                '/debug/usage.md',
                '/debug/livewire.md',
                '/debug/testing-environment.md',
                '/debug/deploying-to-production.md',
                '/debug/reference-sheet.md',
            ],
        },
    ],
}
