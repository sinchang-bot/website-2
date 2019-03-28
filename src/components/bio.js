/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div>
              <p>
                Hi, my name is <strong>{author}</strong>. This is by website. If you'd like to find me elsewhere (you creep), I'm on{" "}
                <a href={`https://twitter.com/${social.twitter}`}>
                  Twitter
                </a>
                ,{" "}
                <a href={`https://github.com/${social.github}`}>
                  Github
                </a>
                ,{" "}
                <a href={`https://instagram.com/${social.instagram}`}>
                  Instagram
                </a>
                , and{" "}
                <a href={`https://linkedin.com/in/${ social.linkedin}`}>
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`

export default Bio
