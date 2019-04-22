module.exports = {
  siteMetadata: {
		title: `Marissa Fujarte`,
		description: 'Gatsby Wordpress website',
		subtitle: 'Gatsby Wordpress subtitle',
    author: `@kkv263`,
  },
  plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
		},
		    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost:8888",
        protocol: "http",
				useACF: true,
				hostingWPCOM: false,
        verboseOutput: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}




