import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";

const PostParent = styled.div`
    position: absolute;
    inset: 0;
    color: var(--on_surface);

    h2 {
      font-size: 1.3rem;
      margin-bottom: 0.25rem;
    }

    a {
      color: inherit;
      text-decoration: none;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      height: 100%;
      :hover {
        .thumbnail-image {
          transform: scale(1.1);
          transition: ease 0.4s;
          opacity: 0.8;
        }
        .text-container {
          background: var(--surface_base);
          transition: ease 0.4s;
        }
      }
    }

  .thumbnail-image {
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.25;
    transition: cubic-bezier(.18,.89,.32,1.28) 0.4s;
  }

  .text-container {
    background: transparent;
    transition: cubic-bezier(.18,.89,.32,1.28) 0.4s;
    padding: 0.75rem 1rem 1rem; 
    p {
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    position: static;
    padding: 3rem 1.5rem;

    h2 {
      font-size: 1.7rem;
      max-width: 90%;
    }

    a {
      display: flex;
      flex-direction: column;
    }

  }
`

const PostLink = ({ post }) => (
  <PostParent>
      <Link to={post.frontmatter.slug}>
        <div className="text-container">
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.category}</p>
        </div>
        <GatsbyImage alt="" className="thumbnail-image" image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}></GatsbyImage>
    </Link>
  </PostParent>
)

export default PostLink