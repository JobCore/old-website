import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const PostPreview = ({ frontmatter, excerpt }) => (
  <div className="post">
    <Link className="postUrl" to={frontmatter.path}>
      <h3 className="post__heading">
        <span className="title">{frontmatter.title}</span> by{' '}
        <span className="author">{frontmatter.author}</span>
        <small className="date">{frontmatter.date}</small>
      </h3>
    </Link>
    <div className="post__excerpt">
      <p className="excerpt">{excerpt}</p>
    </div>
  </div>
);

PostPreview.propTypes = {
  excerpt: PropTypes.string,
  frontmatter: PropTypes.shape({
    date: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
};

export default PostPreview;
