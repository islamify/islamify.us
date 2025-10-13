// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Islamify',
  tagline: 'Your Repository of Islamic Resources',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'islamify',
  projectName: 'islamify.us',

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: { showReadingTime: true },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },

    navbar: {
      title: 'Islamify',
      logo: { alt: 'Islamify Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'allSidebar', position: 'left', label: 'All' },
        { type: 'docSidebar', sidebarId: 'duasSidebar', position: 'left', label: 'Duas' },
        { type: 'docSidebar', sidebarId: 'ziyaratsSidebar', position: 'left', label: 'Ziyarat' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/about', label: 'About Us', position: 'left' },
        { href: 'https://github.com/islamify/islamify.us', label: 'GitHub', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'All', to: '/docs/intro' }] },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/islamify/islamify.us' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Islamify. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
