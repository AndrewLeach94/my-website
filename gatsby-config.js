const { lazy } = require("react");

module.exports = {
  siteMetadata: {
    title: "my-portfolio",
    siteUrl: "https://andrewleach.design",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/markdown-pages",
      },
      __key: "images",
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `./src/markdown-pages`,
        },
      }, 
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 800,
                linkImagestoOriginal: true,
                showCaptions: true,
                withWebp: true,
                loeading: lazy,
                wrapperStyle: "margin:5rem 1.5rem; text-align:center;",
              },
            },
          ],
        },
      },
  ],
};
