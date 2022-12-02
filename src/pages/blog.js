import React, { useState } from "react"
import PostLink from "../components/post-link"
import { device } from "../components/breakpoints"
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
      align-self: center;
    }

    @media (max-width: 1070px) {
        display: flex;
        flex-direction: column;
    }

    @media ${device.small} {
      margin: 0 2.5rem;
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
    margin: 1.25rem 0 10rem 0;

    @media ${device.small} {
      grid-template-columns: repeat(1, minmax(10px, 1fr));
      margin-bottom: 5rem;
    }
    @media ${device.medium} {
      grid-template-columns: repeat(2, minmax(10px, 1fr));
    }
    @media ${device.large} {
      grid-template-columns: repeat(3, minmax(10px, 1fr));
    }
    @media ${device.xlarge} {
      grid-template-columns: repeat(4, minmax(10px, 1fr));
    }

`

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;

  @media ${device.mediumDown} {
      display: block;
    }

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
    @media ${device.mediumDown} {
      display: none;
    }
  }
`

const CategoryContainer = styled.div`
    display: flex;

    .button_tertiary {
      margin-right: 1rem;
    }

    @media ${device.small} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
`

 const BlogHome = ({
   
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [currentFilter, setCurrentFilter] = useState("All Posts");

  const filterPosts = () => {
    if (currentFilter === "Tech & Design") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail" key={edge.node.id}><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
    if (currentFilter === "Travel") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail" key={edge.node.id}><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
    else if (currentFilter === "Case Study") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail" key={edge.node.id}><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
    else if (currentFilter === "Random") {
      const filteredPosts = edges.filter(post => post.node.frontmatter.category === currentFilter);
      return filteredPosts
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail" key={edge.node.id}><PostLink key={edge.node.id} post={edge.node} /></div>)
    }
    else {
      return edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <div className="blog-thumbnail" key={edge.node.id}><PostLink key={edge.node.id} post={edge.node} /></div>)
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
    <div className="blog-thumbnail" key={edge.node.id}>
      <PostLink key={edge.node.id} post={edge.node} />
    </div>);
    
    return mostRecentPosts;
  }

  return (
        <div>
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
                <button className="button_tertiary" onClick={() => changeFilter("All Posts")}>All</button>
                <button className="button_tertiary" onClick={() => changeFilter("Tech & Design")}>Tech & Design</button>
                <button className="button_tertiary" onClick={() => changeFilter("Case Study")}>Case Studies</button>
                <button className="button_tertiary" onClick={() => changeFilter("Travel")}>Travel</button>
                <button className="button_tertiary" onClick={() => changeFilter("Random")}>Random</button>
              </CategoryContainer>
              <p>Showing results for <b>{currentFilter}</b></p>
              <PostsContainer>
                  {filterPosts("most-recent")}
              </PostsContainer>
              <BlogBio />
            </BlogParent>
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