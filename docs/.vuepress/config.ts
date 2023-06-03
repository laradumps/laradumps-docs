import {defaultTheme, defineUserConfig} from 'vuepress'

import {
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
        docsDir: 'docs',
        locales: {
            '/': {
                sidebar: sidebarEn,
                editLinkText: 'Edit this page on GitHub',
            },
        }
    }),
})
