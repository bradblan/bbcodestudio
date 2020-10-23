import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bio = () => {
  const title = "Bio"

  return (
    <Layout title={title}>
      <SEO title={title} />
      <h1 class="text-center">Bio</h1>
      <p>
        I began my love affair with computers almost 40 years ago playing Donkey
        Kong on an Apple IIe. I wrote my first program for pay in AppleBasic as
        a junior for a fire department that wanted a better way to bill their
        accounts. Thus began my passion for coding.
      </p>
      <p>
        <img
          src="http://static.thedarkland.com/comics/tech-support.jpg"
          alt="Tech Support from thedarkland.com"
          class="smallest float-right pb-2 pl-3"
        />
        I studied engineering in college and continued to learn new programming
        languages such as Assembly, C, and Fortran. Soon after I graduated, I
        was introduced to web design and databases; and the joys of programming
        in Coldfusion and PHP. At the same time, I wanted to gain a better
        understanding of the hardware (yes, real hardware) and systems on which
        my code was running. I earned certifications in server operating systems
        and general security practices. I became "the IT guy" for my family and
        friends.
      </p>
      <p>
        Today, I am a senior systems administrator and front-end developer for a
        large insurance company in Florida. I manage several company websites
        that were built using the Liferay enterprise portal platform. Along with
        my admin duties, I write css/scss, design new web templates, and
        generally work with our developers to produce an attractive, responsive,
        and engaging UI for our users. At present, I am focused on accessibility
        and analytics.
      </p>
      <p>
        <img
          src="http://xoole.com/madnerd/wp-content/uploads/2017/07/computer-guy-02.jpg"
          alt="Computer Guy 2 from madnerd.com"
          class="madnerd float-left pr-3"
        />
        With the rise of Covid and the forced need to work from home, I have
        taken advantage of a LinkedIn Learning account to catch up on the latest
        trends in web design and development. This led to an interest in React
        and in turn, Gatsby. I remember when javascript was for cool web tricks,
        and it was to be used sparingly. I had some friends who wanted their
        website re-designed, and I decided to put what I was learning about
        modern javascript into practice.
      </p>
      <div class="clearfix"></div>
    </Layout>
  )
}

export default Bio
