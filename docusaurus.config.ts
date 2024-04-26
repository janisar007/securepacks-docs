import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";


const config: Config = {
  title: "initializ Documentation",
  tagline: "AI UNIFIED DEVSECOPS PLATFORM",
  favicon: "img/logo_new.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/Documentation-Template/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "initializ", // Usually your GitHub org/user name.
  projectName: "Documentation-Template", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/initializ/Documentation-Template/edit/main/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/initializ/Documentation-Template/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo_new.png",

    navbar: {
      title: "Initializ Securepacks",
      logo: {
        alt: "Initializ Logo",
        src: "img/logo_new.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "DocsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/3nXfym7D87",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/initializ?s=11&t=976ERlYL63HY38fHzrS5_w",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/initializ/Documentation-Template",
            },
          ],
        },
      ],
      copyright: `© 2024, Made with❤️ by initializ inc.`,
    },
    prism: {
      theme: prismThemes.jettwaveLight, // Light code theme
      darkTheme: prismThemes.dracula, // Dark code theme
      additionalLanguages: ["java", "swift"], // Additional languages for syntax highlighting
    },
    algolia: {
      appId: "0WDU4T6PDO",
      apiKey: "14e8ed0c206549035790a1654a58c9ab",
      indexName: "initializio",
      contextualSearch: true, // Show contextual search results
      searchParameters: {}, // Additional search parameters
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
