import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Snippets = () => {
  const title = "Snippets"

  return (
    <Layout title={title}>
      <SEO title={title} />
      <div id="contentSnippets">
        <h1>{title}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { publish: { eq: true }, type: { eq: "Snippet" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "M/D/YYYY")
          }
        }
      }
    }
  }
`

export default Snippets
