import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";

const PostParent = styled.div`
    position: relative;
    color: var(--on_surface);
    padding-bottom: 2.75rem;
    border-bottom: solid 1px #0000001a;
    margin-bottom: 2.75rem;

    h2 {
      font-size: 2.3rem;
      font-weight: 400;
      max-width: 75%;
      font-family: 'Trocchi',sans-serif;
      margin-bottom: 0.25rem;

    }

    .post_list-date {
      font-size: 8rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      text-align: left;
    }

    .post_list-excerpt {
      margin-bottom: 1.75rem;
      font-size: 1rem;
      text-align: left;
    }


    a {
      color: inherit;
      text-decoration: none;
    }



  :last-child {
    border-bottom: none;
    margin-bottom: 0;

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


    .post_list-category {
      position: static;
      border: none;
      font-weight: 700;
      align-self: flex-start;
      margin-bottom: 0.25rem;
      padding: 0;
    }
  }
`

const PostLink = ({ post }) => (
  <PostParent>
      <Link to={post.frontmatter.slug}>
          <h2>{post.frontmatter.title}</h2>
          <p className="post_list-date">{post.frontmatter.date}</p>
          <p className="post_list-excerpt">{post.excerpt}</p>
          <p className="button_secondary">Read More</p>
          <GatsbyImage image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}></GatsbyImage>
    </Link>
  </PostParent>
)

export default PostLink