import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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

    .post_list-category {
      font-size: 1rem;
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      border: solid 1px var(--primary_base);
      color: var(--on_surface);
      border-radius: 50px;
      padding: 0.5rem 0.75rem;
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
    padding: 3rem 1rem;

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
      width: 50%;
      margin-bottom: 2.5rem;
    }
  }
`

const PostLink = ({ post }) => (
  <PostParent>
      <Link to={post.frontmatter.slug}>
          <p className="post_list-category">{post.frontmatter.category}</p>
          <h2>{post.frontmatter.title}</h2>
          <p className="post_list-date">{post.frontmatter.date}</p>
          <p className="post_list-excerpt">{post.excerpt}</p>
        <Link to={post.frontmatter.slug} className="button_secondary">Read More</Link>
    </Link>
  </PostParent>
)

export default PostLink