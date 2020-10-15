import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const title = "Home"
  const pageTitle = title + " - " + siteTitle

  return (
    <Layout location={location} title={pageTitle}>
      <SEO title={title} />
      <div id="contentHome">
        <div class="header-home">
          <h1>bb Code Studio</h1>
          <h2>I am evolving!</h2>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="card bbcs-card py-3">
              <div class="card-image-top image-home small">
                <img
                  src="https://imgs.xkcd.com/comics/wisdom_of_the_ancients.png"
                  alt="Wisdom of the Ancients"
                />
              </div>
              <div class="card-body">
                <p class="card-text">
                  Welcome to my little bubble in the codesphere. I hope you
                  enjoy your stay!
                </p>
              </div>
            </div>
            <div class="image-home big mt-5">
              <img
                src="https://i.imgur.com/pumgE.jpg"
                alt="Life before Google"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="card bbcs-card mb-5">
              <div class="card-body">
                <h3 class="card-title">Languages &amp; Frameworks</h3>
                <p class="card-text">
                  My current interests are in JavaScript, ReactJS, and Gatsby,
                  but Liferay, CSS, and accessibility topics may show up as
                  well.
                </p>
              </div>
            </div>
            <div class="card bbcs-card mb-5">
              <div class="card-body">
                <h3 class="card-title">Posts</h3>
                <p class="card-text">
                  Ready to get your code on? Open the Posts folder, and you will
                  find:
                  <ul>
                    <li>
                      <strong>Articles:</strong> these take more than a few
                      minutes to read.
                    </li>
                    <li>
                      <strong>Snippets:</strong> these don't.
                    </li>
                    <li>
                      <strong>Categories &amp; Tags:</strong> these make me seem
                      organized.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card bbcs-card">
              <div class="card-body">
                <h3 class="card-title">Color Themes</h3>
                <p class="card-text">
                  Need a new perspective? Click Themes and choose the dark side
                  or head to the light to see a preview of the theme or click
                  the switch to change it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
