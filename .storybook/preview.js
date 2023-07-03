import { withThemeByClassName } from '@storybook/addon-styling'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

/* TODO: update import to your tailwind styles file */
import '../src/assets/main.css'
/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    }
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light'
    })
  ]
}

export default preview
