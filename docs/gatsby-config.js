const path = require("path");
const componentsPkg = require("@kiwicom/orbit-components/package.json");
const tokensPkg = require("@kiwicom/orbit-design-tokens/package.json");

module.exports = {
  siteMetadata: {
    title: "Orbit",
    description: "Open source design system for your next travel project.",
    siteUrl: "https://orbit.kiwi/",
    author: "Kiwi.com",
    version: {
      components: componentsPkg.version,
      tokens: tokensPkg.version,
    },
  },
  plugins: [
    ...(process.env.CLOUDFLARE_BUILD_ENV === "preview"
      ? []
      : [
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: ["UA-118988244-1"],
            },
          },
        ]),
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documentation",
        path: `${__dirname}/src/documentation`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve("./plugins/gatsby-remark-figma-images"),
            options: {
              path: `${__dirname}/src/figma-images`,
              format: "png",
              scale: 2,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              // The base for generating different image widths
              // Content max width is 80rem (about 809px with no zoom)
              // Minus paddings on each side
              maxWidth: 745,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `md`, `mdx`],
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              backticks: false,
              dashes: `oldschool`,
            },
          },
        ],
        remarkPlugins: [require("remark-deflist")],
        rehypePlugins: [],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: path.resolve(__dirname, "src/images/orbit-glyph.svg"),
        icons: [
          {
            src: path.resolve(__dirname, "src/images/orbit-icon-192.png"),
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: path.resolve(__dirname, "src/images/orbit-icon-512.png"),
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    // our custom plugins place here:
    {
      resolve: require.resolve("./plugins/contributors"),
      options: {
        repo: "orbit",
        owner: "kiwicom",
      },
    },
    {
      resolve: require.resolve("./plugins/sandbox"),
      options: {
        path: path.join(__dirname, "src/__examples__"),
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        snippets: path.join(__dirname, "src/snippets"),
      },
    },
  ],
};
