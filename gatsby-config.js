const { lazy } = require("react");

require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {
  flags: {
    DEV_SSR: false
  },
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`), // exists for keeping single layout consistent accross pages
      },
    },
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
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            process.env.GA_ID, // Google Analytics / GA
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          gtagConfig: {
            optimize_id: "OPT_CONTAINER_ID",
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Delays processing pageview events on route update (in milliseconds)
            delayOnRouteUpdate: 0,
          },
        },
      }
  ],
};
