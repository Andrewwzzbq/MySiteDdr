// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación en Docusaurus',
  tagline: 'JLBenYa',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: '/',
      navbar: {
        title: '',
        logo: {
          alt: '/',
          src: 'https://i.imgur.com/eNrokV0.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          // Eliminamos la siguiente línea {to: '/blog', label: 'Blog', position: 'left'}, para quitar el enlace al blog
          {
            href: 'https://github.com/Andrewwzzbq?tab=repositories', // Cambiamos el enlace de GitHub
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/UnSolitariomas0/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/zfr_andrw/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // Eliminamos la siguiente línea {label: 'Blog', to: '/blog'} para quitar el enlace al blog
              {
                label: 'GitHub',
                href: 'https://github.com/Andrewwzzbq', // Cambiamos el enlace de GitHub
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  ----- My proyecto :)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
