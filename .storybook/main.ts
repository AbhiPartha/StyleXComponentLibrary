import { StorybookConfig } from '@storybook/nextjs';
import StylexPlugin from '@stylexjs/nextjs-plugin';
import path from 'path';

const config: StorybookConfig = {
  logLevel: 'debug',
  features: {
    storyStoreV7: true
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../static'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-performance'
  ],
  framework: '@storybook/nextjs',
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.resolve = config.resolve ?? {};

    // webpack < 5 used to include polyfills for node.js core modules by default.
    // Prevent ModuleNotFoundError for this dependency.
    config.resolve.fallback = {
      fs: false,
      path: false,
      url: false,
      module: false,
      assert: false,
      perf_hooks: false
    };

    config.plugins = config.plugins || [];
    config.plugins.push(
      StylexPlugin({
        rootDir: path.join(__dirname, '..')
      })
    );

    return config;
  }
};
export default config;
