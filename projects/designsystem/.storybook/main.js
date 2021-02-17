const path = require('path');

module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "./designsystem/**/*.stories.mdx",
    "./designsystem/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/app/**/*.stories.mdx",
    "../src/app/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    '@storybook/addon-docs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html'
  ]
}
