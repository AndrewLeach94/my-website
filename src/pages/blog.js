import React, { useState } from "react"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import styled from "styled-components"
import { BlogBio } from "../components/blog_bio"
import { graphql } from 'gatsby'


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

    @media (max-width: 1070px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 500px) {
        header {
          margin-bottom: 0;
        }
    }

    .blog-thumbnail {
      position: relative;
      min-height: 200px;
      overflow: hidden;
      h2 {
        font-family: 'Barlow', sans-serif;
      }
    }
`

const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(10px, 1fr));
    box-shadow: 0px 0px 10px 0px #00000021;
    margin: 1.25rem 0 6.5rem 0;

    @media (min-width: 1367px) {
      grid-template-columns: repeat(4, minmax(10px, 1fr));
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(10px, 1fr));
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(1, minmax(10px, 1fr));
    }

`

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;

  #featured-post {
    h2 {
      font-size: 2.3rem;
      ::before {
        content: 'Featured:';
        display: block;
        font-size: 1.3rem;
        font-weight: 400;
      }
    }
  }
  .featured_most-recent {
    h2 {
      font-size: 1.3rem;
    }
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
      .map(edge => <div className="blog-thumbnail"><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
    else if (currentFilter === "Case Study") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail"><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
    else if (currentFilter === "Random") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail"><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
    else {
      return edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail"><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
  }

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
    filterPosts();
  }

  const generateFeaturedPost = () => {
    const featuredPost = edges.filter(post => post.node.frontmatter.featuredPost === "true");

    return featuredPost
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  }

  const generateMostRecentPosts = () => {
    // filter posts by date and exclude the featured post
    const posts = edges.filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.featuredPost !== "true" )
    
    const mostRecentPosts = posts.slice(0, 3).map(edge => 
    <div className="blog-thumbnail">
      <PostLink key={edge.node.id} post={edge.node} />
    </div>);
    
    return mostRecentPosts;
  }

  return (
        <div>
          <Layout >
            <BlogParent>
              <header>
                <h1>The Blog</h1>
                <FeaturedGrid>
                  <div className="blog-thumbnail" id="featured-post">
                    {generateFeaturedPost()}
                  </div>
                  <div className="featured_most-recent">
                    {generateMostRecentPosts()}
                  </div>
                </FeaturedGrid>
              </header>
                <CategoryContainer>
                  <button className="button_tertiary" onClick={() => changeFilter("Case Study")}>Case Studies</button>
                  <button className="button_tertiary" onClick={() => changeFilter("Travel")}>Travel</button>
                  <button className="button_tertiary" onClick={() => changeFilter("Random")}>Random</button>
                  <button className="button_tertiary" onClick={() => changeFilter("All Posts")}>All</button>
                </CategoryContainer>
                <p>Showing results for <b>{currentFilter}</b></p>
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

export const pageQuery = graphql`{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
        excerpt(pruneLength: 500)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          category
          featuredPost
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, layout: CONSTRAINED)
            }
          }
        }
        excerpt(pruneLength: 500)
      }
    }
  }
}
`