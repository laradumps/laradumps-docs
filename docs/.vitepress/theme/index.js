import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import FloatingVue from 'floating-vue'
import Contributors from './components/Contributors.vue'
import 'floating-vue/dist/style.css'
import './custom.pcss'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
        app.use(FloatingVue, {
            themes: {
                dropdown: {
                    computeTransformOrigin: true,
                },
            },
        })
        app.component('Contributors', Contributors)
    }
}
