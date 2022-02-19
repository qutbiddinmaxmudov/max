/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
  },
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [['babel-plugin-styled-components', { ssr: true, displayName: true, preprocess: false }]],
    },
    production: {
      plugins: [['babel-plugin-styled-components', { ssr: true, displayName: true, preprocess: false }]],
      presets: ['next/babel'],
    },
    test: {
      presets: ['next/babel'],
    },
  },
  plugins: [['babel-plugin-styled-components', { ssr: true, displayName: true, preprocess: false }]],
  presets: ['next/babel'],
}
