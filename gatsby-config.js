/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Oliver Barabas",
    description: "",
    siteUrl: "https://oliverbarabas.com"
  },
  plugins: [
    {
      resolve: "gatsby-theme-musician"
    },
    {
      resolve: "gatsby-plugin-sitemap"
    }
  ]
};
