module.exports = {
  siteMetadata: {
    title: 'JobCore',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
  ],
};
