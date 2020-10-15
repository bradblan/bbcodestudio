import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  VscChevronDown,
  VscChevronRight,
  VscExtensions,
  VscFiles,
  VscMarkdown,
  VscSearch,
  VscSourceControl,
  VscDebugAlt2,
} from "react-icons/vsc"
import { DiSass } from "react-icons/di"
import { FcFolder, FcOpenedFolder } from "react-icons/fc"
import ThemeToggle from "./themetoggle"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/bb_logo.png/" }) {
        childImageSharp {
          fluid(maxHeight: 25) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  const logo = data?.logo?.childImageSharp?.fluid

  return (
    <div className="container global-wrapper">
      <header>
        <div id="globalHeader" class="row no-gutters">
          <div class="col-6">
            <nav role="navigation">
              <Link to="/">
                <Img fluid={logo} alt="bb Code Studio" className="site-logo" />
              </Link>
              <ul class="global-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/bio">Bio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-6">
            <h1 className="main-heading">{title}</h1>
          </div>
        </div>
        <div id="sideNav">
          <div class="activity-bar">
            <VscFiles />
            <VscSearch />
            <VscSourceControl />
            <VscDebugAlt2 />
            <VscExtensions />
          </div>
          <div class="side-bar">
            <div class="side-nav-container">
              <div class="needed-to-make-collapse-work">
                <a id="hidePosts" href="#hidePosts" class="hide">
                  <VscChevronRight />
                  <FcFolder />
                  &nbsp;Posts
                </a>
                <a id="showPosts" href="#showPosts" class="show">
                  <VscChevronDown />
                  <FcOpenedFolder />
                  &nbsp;Posts
                </a>
                <div id="posts" class="side-links">
                  <Link to="#">
                    <VscMarkdown /> Articles.md
                  </Link>
                  <Link to="#">
                    <VscMarkdown /> Snippets.md
                  </Link>
                  <Link to="#">
                    <VscMarkdown /> Categories.md
                  </Link>
                  <Link to="#">
                    <VscMarkdown /> Tags.md
                  </Link>
                </div>
              </div>
              <div class="needed-to-make-collapse-work">
                <a id="hideThemes" href="#hideThemes" class="hide">
                  <VscChevronRight />
                  <FcFolder />
                  &nbsp;Themes
                </a>
                <a id="showThemes" href="#showThemes" class="show">
                  <VscChevronDown />
                  <FcOpenedFolder />
                  &nbsp;Themes
                </a>
                <div id="themes" class="side-links">
                  <Link to="assets/light_preview.png">
                    <DiSass />
                    Light.scss
                  </Link>
                  <Link to="assets/dark_preview.png">
                    <DiSass />
                    Dark.scss
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <div class="copyright">
              © {new Date().getFullYear()}
              <br />
              All rights reserved.
              <br />
              <a href="/">bb Code Studios</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div id="contentTop">{children}</div>
      </main>
    </div>
  )
}

export default Layout
