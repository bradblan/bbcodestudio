import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const title = "About"
  const pageTitle = title + " - " + siteTitle

  return (
    <Layout title={pageTitle}>
      <SEO title={title} />
      <div class="content-wrapper">
        <h1 class="text-center">About...this site</h1>
        <div class="row">
          <div class="col-6">
            <div class="image-home bigger">
              <img
                src="http://www.bombdudecomics.com/uploads/9/1/8/2/91827044/mirror-image-small_orig.png"
                alt="Attack of the Clones"
              />
            </div>
          </div>
          <div class="col-6">
            <p>
              What? You thought this was going to be about me? I guess in a way
              it is. I have a coworker who cringes every time he sees my desktop
              because I almost always have five or six browser windows open with
              an average of ten or twelve tabs active in each one. See if you
              can relate...you are in the middle of a development project when
              you hit a roadblock. You open up Google to find some help, and
              before you know it, you have five or six tabs open all with bits
              of advice you want to preserve. At the same time, you have another
              set of tabs open for reference (Bootstrap, W3Schools, GMail,
              etc.); and before you know it, you have twenty plus tabs squeezed
              in the browser window.
            </p>
            <p>
              How do you keep track of all this information? Are you going to be
              able to find it again if you encounter a similar problem in
              another project weeks later? My goal for this blog is to have a
              place where I can reference all those pearls of Internet wisdom
              and the solutions I derived from them so that I am ready when that
              next problematic project comes my way.
            </p>
          </div>
        </div>
        <div class="row col-12">
          <p>
            Oh, and that coworker, he says I have a masters degree in
            GoogleScience Engineering also known as:
          </p>
          <h2 class="mx-auto">MaGE</h2>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
