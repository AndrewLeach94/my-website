import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PostParent = styled.div`
    margin-bottom: 30px;
    color: var(--on_surface);

    :hover {
      color: var(--primary_base);
    }


`

const TitleContainer = styled.div`
    font-size: 2.3rem;
    font-weight: 700;

    
`

const DateContainer = styled.div`
    font-size: 1rem;

`

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      <PostParent>
        <TitleContainer>
          {post.frontmatter.title} 
        </TitleContainer>
        <DateContainer>
          {post.frontmatter.date}
        </DateContainer>
      </PostParent>
    </Link>
  </div>
)

export default PostLink