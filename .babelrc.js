const path = require('path');
module.exports = {
  sourceType: "unambiguous",
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV === 'development',
        genConditionalClasses: true,
        treeshakeCompensation: true,
        aliases: {
          '@src/*': [path.join(__dirname, 'src/*')],
        },
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname
        },
      },
    ],
  ]
}