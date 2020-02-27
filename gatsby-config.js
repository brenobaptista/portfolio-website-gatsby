module.exports = {
  siteMetadata: {
    title: `Breno Baptista`,
    description: `This website is the portfolio of the web developer Breno Baptista`,
    author: `Breno Baptista`,
    siteUrl: "https://brenobaptista.github.io",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
        background_color: `#FFDD57`,
        theme_color: `#FFDD57`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
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
