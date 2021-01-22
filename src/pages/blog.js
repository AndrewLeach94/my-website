import React from "react"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import styled from "styled-components"
import { BlogBio } from "../components/blog_bio"


const BlogParent = styled.div`

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 9rem;
    }

    h1 {
      margin-top: 5rem;
      text-align: center;
    }

    p {
      margin-top: 0;
      margin-bottom: 5rem;
      font-size: 1.3rem;
      text-align: center;
    }

    @media (max-width: 1070px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

`

const PostsContainer = styled.div`
    margin: 0rem 3.75rem 7.5rem;
    background-color: var(--surface_lighter);
    width: 50vw;
    padding: 1rem 2rem;
    box-shadow: 0px 0px 10px 1px #00000026;

    @media (max-width: 1070px) {
        margin: 0rem 0;
        width: 60vw;
    }

    @media (max-width: 800px) {
      width: 80vw;
    }

    @media (max-width: 500px) {
      width: 100vw;
      background-color: inherit;
      box-shadow: none;
      
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
              <BlogParent>
                <header>
                  <h1>The Blog</h1>
                  <p>What's the Story, Morning Glory?</p>
                  <BlogBio />
                </header>
                  <PostsContainer>
                      {Posts}
                  </PostsContainer>
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