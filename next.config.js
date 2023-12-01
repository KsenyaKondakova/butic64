/** @type {import('next').NextConfig} */
// next.config.js
const withTM = require('next-transpile-modules')(['node-fetch']);

module.exports = withTM({
  reactStrictMode: true,
  // Другие настройки Next.js
});
