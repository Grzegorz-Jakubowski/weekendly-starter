import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath, URL } from "node:url";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  viteFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      // Stories never talk to json-server: the API client is swapped for a local stand-in.
      alias: [
        {
          find: /^@\/api\/places$/,
          replacement: fileURLToPath(new URL("../mock_backend/storybook.ts", import.meta.url)),
        },
        ...(Array.isArray(config.resolve?.alias)
          ? config.resolve.alias
          : Object.entries(config.resolve?.alias ?? {}).map(([find, replacement]) => ({
              find,
              replacement,
            }))),
      ],
    },
  }),
};

export default config;
