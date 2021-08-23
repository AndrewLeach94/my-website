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
    margin-bottom: 7.5rem;

    .button_primary {
      margin-top: 4rem;
    }

    .blog-header {
        position: relative;
        width: 100%;
        height: 75vh;
        overflow: hidden;
        box-shadow: 0px -3px 10px #0000001c;
        background: ${props => props.theme.caseStudyVideoOverlay};


        h1 {
          position: absolute;
          font-size: 3.1rem;
          max-width: 65%;
          bottom: 3.5rem;
          left: calc(100vw - 80%);
          z-index: 1;
        }

        p {
          position: absolute;
          font-size: 1.3rem;
          left: calc(100vw - 80%);
          z-index: 1;
          bottom: 0;
        }

        .featured-image {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          height: 100%;
          margin: auto;
          opacity: 0.25;
          filter: saturate(0%);
        }

    }

    .blog-post-content {
      background-color: var(--surface_lighter);
      box-shadow: 0px 3px 10px #0000001c;
      padding: 5rem calc(100vw - 80%) 5.5rem calc(100vw - 80%);
      margin-bottom: 7.5rem;


      p {
        font-size: 1.3rem;
        align-self: flex-start;
      }

      a {
        color: var(--primary_lighter);
      }

      h2 {
        font-size: 2.3rem;
        font-weight: 400;
        margin-top: 5rem;
      }

      h2:nth-child(1) { // removes margin for first hedder
        margin-top: 0;
      }

      h3, h4, h5, h6 {
        margin-top: 3rem;
      }

      li {
        font-size: 1.3rem;
      }

      .youtube-player {
        margin: 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

    }

    @media (max-width: 836px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;


        .blog-header {
          height: 60vh;
          
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
          }
        }
    }

    @media (max-width: 600px) {
        .blog-header {
          background-color: inherit;
          box-shadow: none;
          background-color: var(--surface_lighter);
          background: none;
          height: 50vh;
          padding-top: 2rem;

          h1 {
            left: 1.5rem;
          }

          p {
            left: 1.5rem;
          }
        }

        .blog-post-content {
          box-shadow: none;
          margin-bottom: 5rem;
          padding: 2rem calc(100vw - 90%) 5.5rem calc(100vw - 90%);

          h2 {
            font-size: 1.3rem;
            text-align: left;
            margin-top: 2rem
          }

          h3, h4, h5, h6 {
            margin-top: 2rem;
            font-size: 1rem;
            text-align: left;
          }
        }

        iframe {
          width: 100%;
          height: 100%;
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