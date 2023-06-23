/** @type { import('@storybook/react').Preview } */

import { themes } from "@storybook/theming"

const preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#333333",
        },
        {
          name: "light",
          value: "#fff",
        },
      ]
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
