module.exports = {
  siteMetadata: {
    title: `Breno Baptista`,
    description: `This website is the portfolio of the web developer Breno Baptista`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Website of Breno Baptista`,
        short_name: `Breno Baptista`,
        start_url: `/`,
        background_color: `#53297C`,
        theme_color: `#53297C`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146454458-1",
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
