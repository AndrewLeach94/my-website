import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { BlogBio } from "../components/blog_bio"
import Img from "gatsby-image"
import styled from "styled-components"


const PostParent = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 7.5rem;
    margin-bottom: 7.5rem;

    .button_primary {
      margin-top: 4rem;
    }

    .blog-header {
        position: relative;
        width: 65vw;
        height: 400px;
        overflow: hidden;
        box-shadow: 0px -3px 10px #0000001c;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background: ${props => props.theme.caseStudyVideoOverlay};


        h1 {
          position: absolute;
          font-size: 3.1rem;
          max-width: 75%;
          bottom: 3.5rem;
          left: 4rem;
          z-index: 1;
        }

        p {
          position: absolute;
          font-size: 1.3rem;
          left: 4rem;
          z-index: 1;
          bottom: 0;
        }

        .featured-image {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          margin: auto;
          opacity: 0.25;
          filter: saturate(0%);
        }

    }

    .blog-post-content {
      width: 65vw;
      background-color: var(--surface_lighter);
      box-shadow: 0px 3px 10px #0000001c;
      padding: 5.5rem 0;
      margin-bottom: 5rem;


      p {
        padding: 0 4rem;
        font-size: 1.3rem;
      }

      h2 {
        font-size: 2.3rem;
        font-weight: 400;
        padding: 0 4rem;
      }
    }

    @media (max-width: 836px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;


        .blog-header {
          width: 85vw;

          h1 {
            text-align: left;
            font-size: 2.3rem;
            left: 2rem;
            max-width: 90%;
          }

          p {
            font-size: 1.3rem;
            left: 2rem;
          }
        }

        .blog-post-content {
          text-align: left;
          width: 85vw;


          p {
            font-size: 1rem;
            padding: 0 4rem;
          }

          h2 {
            padding: 0 4rem;
          }
        }
    }

    @media (max-width: 600px) {
        .blog-header {
          width: 100vw;
          background-color: inherit;
          box-shadow: none;
          background-color: var(--surface_lighter);
          background: none;

          h1 {
            left: 1.5rem;
          }

          p {
            left: 1.5rem;
          }
        }

        .blog-post-content {
          width: 100vw;
          background-color: inherit;
          box-shadow: none;

          p {
            padding: 0 1.5rem;
          }

          h2 {
            font-size: 1.3rem;
            padding: 0 1.5rem;
            text-align: left;
          }
        }
    }

    @media (min-width: 1500px) {
        .blog-header {
          width: 60vw;
        }
        .blog-post-content {
          width: 60vw;
        }
    }

`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid

  return (
    <div className="blog-post-parent">
    <Layout >
      <PostParent>
          <header className="blog-header">
                <Img className="featured-image" fluid={featuredImgFluid} />
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
          </header>
          <main
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          <BlogBio />
          <Link to="/blog" className="button_primary">Back to Blog</Link>
        </PostParent>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`