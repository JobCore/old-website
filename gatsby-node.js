const fs = require('fs-extra');
const path = require('path');
const createPaginatedPages = require('gatsby-paginate');
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const Blog = path.resolve(`src/templates/blog.js`);
  const postTemplate = path.resolve(`src/templates/single-post.js`);

  return new Promise(resolve => {
    graphql(`
      {
        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              html
              excerpt
              frontmatter {
                title
                path
                author
                date
              }
            }
          }
        }
      }
    `).then(result => {
      const EDGES = result.data.posts.edges;
      createPaginatedPages({
        edges: EDGES,
        createPage,
        pageTemplate: Blog,
        pageLength: 10,
        pathPrefix: 'blog',
        context: {},
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
      });
      EDGES.map(({ node }) =>
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
          context: {},
        })
      );
      resolve();
    });
  });
};

exports.onPostBootstrap = () => {
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales')
  );
};

exports.modifyWebpackConfig = config => {
  const configuration = config;
  configuration.devtool = 'source-map';
  return config;
};
