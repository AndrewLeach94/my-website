import React, { useState } from "react"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import styled from "styled-components"
import { BlogBio } from "../components/blog_bio"


const BlogParent = styled.div`
    margin: 0 4.5rem;
    display: flex;
    flex-direction: column;

    header {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }

    h1 {
      margin-top: 5rem;
      margin-bottom: 2rem;
    }

    p {
      margin-top: 0;
      margin-bottom: 5rem;
      font-size: 1.3rem;
    }

    @media (max-width: 1070px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 500px) {
        header {
          margin-bottom: 0;
        }
    }

`

const PostsContainer = styled.div`
    background-color: var(--surface_lighter);
    width: 60vw;
    padding: 1rem 2rem;
    box-shadow: 0px 0px 10px 0px #00000021;

    @media (max-width: 1070px) {
        margin-bottom: 7.5rem;
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

const CategoryContainer = styled.div`
    display: flex;

    .button_tertiary {
      margin-right: 1rem;
    }
`

 const BlogHome = ({
   
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [currentFilter, setCurrentFilter] = useState("All Posts");

  const filterPosts = () => {
    if (currentFilter === "Travel") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    }
    else if (currentFilter === "Case Study") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    }
    else if (currentFilter === "Random") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    }
    else {
      return edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    }
  }

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
    filterPosts();
  }

  return (
        <div>
          <Layout >
            <BlogParent>
              <header>
                <h1>The Blog</h1>
                <CategoryContainer>
                  <button className="button_tertiary" onClick={() => changeFilter("Case Study")}>Case Studies</button>
                  <button className="button_tertiary" onClick={() => changeFilter("Travel")}>Travel</button>
                  <button className="button_tertiary" onClick={() => changeFilter("Random")}>Random</button>
                  <button className="button_tertiary" onClick={() => changeFilter("All Posts")}>All</button>
                </CategoryContainer>
                <p>Showing results for {currentFilter}</p>
              </header>
                <PostsContainer>
                    {filterPosts("most-recent")}
                </PostsContainer>
                <BlogBio />
              </BlogParent>
          </Layout>
        </div>
    )
}

export default BlogHome

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
            featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }    
          }
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`