// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// Used to debug production build issues faster
const isBuildFast = !!process.env.BUILD_FAST;

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */

module.exports = async function createConfigAsync() {
  return {
    title: "FreeCAD documentation",
    tagline: "CAD is cool",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://your-docusaurus-test-site.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "FreeCAD", // Usually your GitHub org/user name.
    projectName: "FreeCAD-docusaurus-documentation", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr', 'nl', 'it', 'es', 'tr', 'zh', 'cs', 'ru', 'uk', 'sl'],
      path: 'i18n',
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
          calendar: 'gregory',
          path: 'en',
        },
        nl: {
          label: 'Deutsch',
          direction: 'ltr',
          path: 'nl',
        },
        fr: {
          label: 'Français',
          direction: 'ltr',
          path: 'fr',
        },
        it: {
          label: 'Italiano',
          direction: 'ltr',
          path: 'it',
        },
        es: {
          label: 'Español',
          direction: 'ltr',
          path: 'es',
        },
        tr: {
          label: 'Türkçe',
          direction: 'ltr',
          path: 'tr',
        },
        zh: {
          label: '中文',
          direction: 'ltr',
          path: 'zh',
        },
        cs: {
          label: 'Čeština',
          direction: 'ltr',
          path: 'cs',
        },
        ru: {
          label: 'русский',
          direction: 'ltr',
          path: 'ru',
        },
        uk: {
          label: 'українська',
          direction: 'ltr',
          path: 'uk',
        },
        sl: {
          label: 'slovenščina',
          direction: 'ltr',
          path: 'sl',
        },
      },
    },

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: "docs",
            // routeBasePath: '/',
            sidebarPath: require.resolve("./sidebars.js"),
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            // Remove this to remove the "edit this page" links.
            editUrl:
              "https://github.com/FreeCAD/FreeCAD-documentation-docusaurus",
          },
          blog: {
            showReadingTime: true,
            // Remove this to remove the "edit this page" links.
            editUrl:
              "https://github.com/FreeCAD/FreeCAD-documentation-docusaurus",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

      ({
        // image: 'img/docusaurus-social-card.jpg',
        liveCodeBlock: {
          playgroundPosition: "bottom",
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        colorMode: {
          defaultMode: "dark",
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        announcementBar: {
          id: "announcementBar", // Increment on change
          content: `⭐️ If you like FreeCAD, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/FreeCAD/FreeCAD-documentation-docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FreeCADNews">Twitter ${TwitterSvg}</a>.`,
        },
        navbar: {
          hideOnScroll: true,
          title: "FreeCAD",
          logo: {
            alt: "FreeCAD Logo",
            src: "img/logo.svg",
            srcDark: "img/logo.svg",
            width: 32,
            height: 32,
          },
          items: [
            {
              type: "docSidebar",
              sidebarId: "tutorialSidebar",
              position: "left",
              label: "Tutorial",
            },
            // {
            //   to: 'https://yorik.uncreated.net/blog/2023-021-freecad-weekly14',
            //   label: 'Blog',
            //   position: 'left'
            // },
            {
              type: "localeDropdown",
              position: "left",
              dropdownItemsAfter: [
                {
                  type: "html",
                  value: '<hr style="margin: 0.3rem 0;">',
                },
                {
                  href: "https://github.com/FreeCAD/FreeCAD-documentation-docusaurus",
                  label: "Help Us Translate",
                },
              ],
            },
            {
              label: "Release Notes",
              type: 'docsVersionDropdown',
              dropdownActiveClassDisabled: true,
              position: "right",
              dropdownItemsAfter: [
                {
                  href: 'https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/release-notes/release-0.21.md',
                  label: 'Release 0.21',
                },
                {
                  href: 'https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/release-notes/release-0.20.md',
                  label: 'Release 0.20',
                },
                {
                  href: 'https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/release-notes/release-0.19.md',
                  label: 'Release 0.19',
                },
                {
                  href: 'https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/release-notes/release-0.18.md',
                  label: 'Release 0.18',
                },
                {
                  type: 'html',
                  value: '<hr class="dropdown-separator">',
                },
                {
                  to: 'https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/tree/main/src/pages/release-notes',
                  label: 'All releases',
                },
                // {
                //   type: 'html',
                //   className: 'dropdown-archived-versions',
                //   value: '<b>Archived versions</b>',
                // },
              ],
            },
            {
              href: "https://github.com/FreeCAD/FreeCAD-documentation-docusaurus",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub repository",
            },
          ].filter(Boolean),
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Learn",
              items: [
                {
                  label: "Introduction",
                  to: "docs/intro",
                },
                {
                  label: "Installation",
                  to: "docs/overview/download",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Forum",
                  href: "https://forum.freecad.org/",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/FreeCADNews",
                },
                {
                  label: "Discord",
                  href: "https://discord.gg/wybCcPwQRs",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  href: "https://yorik.uncreated.net/blog/2023-021-freecad-weekly14",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/FreeCAD/FreeCAD",
                },
                {
                  html: `
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
              </a>
            `,
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} FreeCAD`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },

        algolia: {
          // The application ID provided by Algolia
          appId: "YOUR_APP_ID",

          // Public API key: it is safe to commit it
          apiKey: "YOUR_SEARCH_API_KEY",

          indexName: "YOUR_INDEX_NAME",

          // Optional: see doc section below
          contextualSearch: true,

          // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
          externalUrlRegex: "external\\.com|domain\\.com",

          // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
          replaceSearchResultPathname: {
            from: "/docs/", // or as RegExp: /\/docs\//
            to: "/",
          },

          // Optional: Algolia search parameters
          searchParameters: {},

          // Optional: path for search page that enabled by default (`false` to disable it)
          searchPagePath: "search",
        },
      }),
  };
};
