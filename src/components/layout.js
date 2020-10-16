import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import sidenavmenus from "../data/sidenavmenus"
import Toggle from "../components/toggle"
import {
  VscExtensions,
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt2,
} from "react-icons/vsc"
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
  const menuitems = sidenavmenus

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
              <div id="posts" class="side-links">
                <Toggle
                  id="posts"
                  menuItems={menuitems.posts}
                  type="button"
                  title="Posts"
                />
              </div>
              <div id="themes" class="side-links">
                <Toggle
                  id="themes"
                  menuItems={menuitems.themes}
                  type="button"
                  title="Themes"
                />
              </div>
            </div>
            <ThemeToggle />
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
