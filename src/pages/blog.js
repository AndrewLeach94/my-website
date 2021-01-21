import React from "react"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import styled from "styled-components"

const BlogParent = styled.div`
    h1 {
      margin-top: 5rem;
      text-align: center;
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
      font-size: 1.3rem;
      text-align: center;
    }

`

const PostsContainer = styled.div`
    margin: 7rem 3.75rem;
    background-color: var(--surface_lighter);
    max-width: 50vw;
    padding: 1em 2em;
    box-shadow: 0px 0px 10px 1px #00000026;
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
        <BlogParent>
            <Layout >
                <h1>The Blog</h1>
                <p>What's the Story, Morning Glory?</p>
                <PostsContainer>
                    {Posts}
                </PostsContainer>
            </Layout>
        </BlogParent>
    )
}

export default BlogHome

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 800)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
          }
          excerpt(pruneLength: 800)
        }
      }
    }
  }
`