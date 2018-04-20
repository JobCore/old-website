import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import PostPreview from '../templates/post-preview';

const Blog = ({ t, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;

  const pages = [
    <div key={uuid()} className={first ? 'page active' : 'page'}>
      <Link to="/blog/" disabled={first}>
        First
      </Link>
    </div>,
    <div key={uuid()} className={last ? 'page active' : 'page'}>
      <Link to={`/blog/${pageCount.toString()}`} disabled={last}>
        Last
      </Link>
    </div>,
  ];
  for (let i = 2; i < pageCount; i += 1) {
    const link = (
      <div className={index === i ? 'page active' : 'page'} key={uuid()}>
        <Link to={`/blog/${i.toString()}`} disabled={index === i}>
          {i}
        </Link>
      </div>
    );
    pages.splice(i - 1, 0, link);
  }

  return (
    <section id="blog">
      <Helmet title={t('title')} />
      <div className="container">
        <div className="posts">
          {group.map(({ node }) => (
            <PostPreview
              key={uuid()}
              frontmatter={node.frontmatter}
              excerpt={node.excerpt}
            />
          ))}
        </div>
        {pageCount > 1 && <div className="pagination">{pages}</div>}
      </div>
    </section>
  );
};

Blog.propTypes = {
  t: PropTypes.func,
  pathContext: PropTypes.shape({
    group: PropTypes.array,
    index: PropTypes.number,
    first: PropTypes.bool,
    last: PropTypes.bool,
    pageCount: PropTypes.number,
  }),
};

export default translate('blog-page')(Blog);

export const pageQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
`;
