import React from "react"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import styled from "styled-components"

const BlogParent = styled.div`
    margin: 120px 60px;
    background-color: var(--surface_lighter);
    max-width: max-content;
    padding: 10px 20px;

    a {
      text-decoration: none;
    }

`


 const BlogHome = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
        <div>
            <Layout >
                <h1>Blog</h1>
                <BlogParent>
                    {Posts}
                </BlogParent>
            </Layout>
        </div>
    )
}

export default BlogHome

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`