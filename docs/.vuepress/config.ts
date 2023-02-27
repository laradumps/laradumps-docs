import {defaultTheme, defineUserConfig} from 'vuepress'

import {
    navbarEn,
    sidebarEn,
    head,
} from './configs'

export default defineUserConfig({
    lang: 'en-US',
    title: 'LaraDumps',
    description: 'Description',
    head,
    theme: defaultTheme({
        logo: '/_media/icon.png',
        repo: 'laradumps/laradumps-docs',
        docsDir: 'main',
        locales: {
            '/': {
                navbar: navbarEn,
                sidebar: sidebarEn,
                editLinkText: 'Edit this page on GitHub',
            },
        }
    }),
})
