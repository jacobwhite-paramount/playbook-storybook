import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    chromatic: {
      // Enable Chromatic visual regression testing
      // Screenshots will be taken for all stories
      testMode: 'snapshot',
      // Viewport sizes to test (optional - can add if needed)
      // viewports: [375, 768, 1024],
      // Delay before taking screenshot (ms) - useful for animations
      // delay: 100,
      // Pixel threshold for visual diff (0-1, lower = more sensitive)
      // diffThreshold: 0.01,
    }
  },
};

export default preview;