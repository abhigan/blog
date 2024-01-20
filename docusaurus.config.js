// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Abhishek's Blog",
  tagline: 'To survive, you must tell stories',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.whatisina.name/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Optional: disable the docs plugin
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          blogTitle: 'Blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Blog',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: '/tags',
            label: 'Tags',
            position: 'left',
          },
          {
            href: '/archive',
            label: 'Archive',
            position: 'left',
          },
          {
            href: 'https://github.com/abhigan',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/abhishek-ganguly-63237321',
            label: 'Linkedin',
            position: 'right',
          },
          {
            href: 'https://stackoverflow.com/users/1043824/inquisitive?tab=profile',
            label: 'Stackoverflow',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',        
        copyright: `Copyright © ${new Date().getFullYear()} Abhishek Ganguly`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
