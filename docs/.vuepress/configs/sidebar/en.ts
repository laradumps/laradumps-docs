import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/': [
        {
            text: 'Get Started',
            children: [
                '/get-started/what-is-laradumps.md',
                '/get-started/installation.md',
                '/get-started/updating-laradumps.md',
                '/get-started/configuration.md',
                '/get-started/desktop-app.md',
            ],
        },
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
