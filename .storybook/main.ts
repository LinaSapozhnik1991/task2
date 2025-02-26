import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [ "../src/shared/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: ["..\\public"],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
