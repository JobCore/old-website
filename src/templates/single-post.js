import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const SinglePost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="single-post">
      <Helmet title={`${frontmatter.title} | JobCore`} />
      <div className="container">
        <h3 className="single-post__heading">
          <span className="title">{frontmatter.title}</span> by{' '}
          <span className="author">{frontmatter.author}</span>
          <small className="date">{frontmatter.date}</small>
        </h3>
        <div
          className="single-post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

SinglePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
      }),
    }),
  }),
};

export const postQuery = graphql`
  query BlogPostQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        title
        author
      }
    }
  }
`;

export default SinglePost;
