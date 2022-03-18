/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,'gatsby-plugin-react-svg',`gatsby-plugin-sharp`, `gatsby-transformer-sharp`,{
    resolve: `gatsby-source-filesystem`,
    options:{
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  }],
}
