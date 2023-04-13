// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MTG Legends Almere',
  tagline: 'Magic: the Gathering Club in Almere',
  favicon: 'img/magic-icon.jpg',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://instantgabe.github.io',
  baseUrl: '/',
  projectName: 'instantgabe.github.io',
  organizationName: 'InstantGabe',
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {routeBasePath: '/',},
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/FNM', label: 'Friday Night Magic', position: 'left'
          },
          {to: '/Betaalgegevens', label: 'Betaalgegevens', position: 'left'
          },
          {to: '/Formats', label: 'Formats', position: 'left'
        },
        ],
      },
      footer: {
        links: [
          {
            title: 'Contact',
            items:  [ 
                  {
                    label: 'Penningmeester', 
                    to:'mailto:metalm4rio@gmail.com'
                  },
                  {
                    label:'Toernooicoördinator', 
                    to:'mailto:meindert.sterenberg@gmail.com'
                  },
                  ],
          },
          {
            title: ' ',
            items:  [ 
                      {
                        label:'Administratie', 
                        to:'mailto:marcelswart22@gmail.com'
                      },
                      {
                        label:'Websitebeheer', 
                        to:'mailto:sonix.jh@gmail.com'
                      },
                    ],
          },
          {
            title: 'Locatie',
            items:  [  
                      {
                        label: 'Buurtcentrum "De Bazuin"',
                        to: 'https://www.google.nl/maps/place/The+MTG+Legends+Almere/@52.3709586,5.1878114,18z/data=!4m6!3m5!1s0x47c616d4b22355bf:0xc66051ad902f8d35!8m2!3d52.3707761!4d5.188683!16s%2Fg%2F1tdfsbjd?hl=nl',
                      },
                    ],
          },
          ],
      },
      announcementBar: {
        id: 'general',
        content: 'De Magic: The Gathering vereniging van Almere',
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
